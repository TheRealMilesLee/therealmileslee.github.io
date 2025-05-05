const fs = require('fs');
const path = require('path');
const axios = require('axios');

// 配置路径
const dir = path.join(__dirname, '../public/photography');
const outFile = path.join(__dirname, '../imageList.json');

// Ollama 本地服务的 URL
const ollamaUrl = 'http://localhost:11434/api/generate';  // Ollama API 端点

// 获取所有图片文件
const files = fs.readdirSync(dir)
  .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))  // 只保留图片文件
  .map(file => ({
    path: path.join(dir, file),
    webPath: `/photography/${ file }`
  }));

const generateImageDescriptions = async () =>
{
  const imageDescriptions = [];

  console.log(`🔍 Processing ${ files.length } images...`);

  for (const image of files)
  {
    try
    {
      console.log(`⏳ Processing: ${ image.webPath }`);

      // 为 Ollama 准备提示词 - 使用 llava 或其他支持图像的模型
      const payload = {
        model: "gemma3:12b",  // 或其他支持图像分析的模型，如 llava:13b
        prompt: "Create a poetic image description in exactly 20 words or less. Capture the essence, emotion and soul of this moment with lyrical language:",
        stream: false,
        images: [fs.readFileSync(image.path, { encoding: 'base64' })]
      };

      const response = await axios.post(ollamaUrl, payload);

      if (response.data && response.data.response)
      {
        // 清理可能的额外空格和换行
        const cleanedDescription = response.data.response.trim();

        imageDescriptions.push({
          imagePath: image.webPath,
          description: cleanedDescription
        });
        console.log(`✓ Generated description for ${ image.webPath }`);
      } else
      {
        imageDescriptions.push({
          imagePath: image.webPath,
          description: 'No description generated.'
        });
        console.log(`✗ No description generated for ${ image.webPath }`);
      }

      // 添加短暂延迟以避免过多请求
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error)
    {
      console.error(`❌ Failed to generate description for ${ image.webPath }:`, error.message);

      // 如果需要更详细的错误信息
      if (error.response)
      {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }

      imageDescriptions.push({
        imagePath: image.webPath,
        description: 'Error generating description.'
      });
    }
  }

  // 输出结果
  fs.writeFileSync(outFile, JSON.stringify(imageDescriptions, null, 2));
  console.log(`✅ Image descriptions generated for ${ imageDescriptions.length } images!`);
  console.log(`📄 Output saved to: ${ outFile }`);

  // 输出示例结果供参考
  console.log('\n📝 Sample output:');
  console.log(JSON.stringify(imageDescriptions.slice(0, 2), null, 2));
};

// 执行主函数
generateImageDescriptions().catch(err =>
{
  console.error('❌ Program failed with error:', err);
  process.exit(1);
});
