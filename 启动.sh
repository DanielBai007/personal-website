#!/bin/bash

# 满意度评价分析平台 - 快速启动脚本
# 作者: AI Assistant
# 更新时间: 2024年12月

echo "🚀 满意度评价分析平台 - 启动中..."
echo "=================================="

# 检查数据文件是否存在
echo "📋 检查数据文件..."
if [ -f "public/data/课程评价数据.xlsx" ] && [ -f "public/data/课程场次.csv" ]; then
    echo "✅ 数据文件检查通过"
    echo "   - 课程评价数据.xlsx: $(ls -lh public/data/课程评价数据.xlsx | awk '{print $5}')"
    echo "   - 课程场次.csv: $(ls -lh public/data/课程场次.csv | awk '{print $5}')"
else
    echo "❌ 数据文件缺失，请检查 public/data/ 目录"
    echo "   需要文件:"
    echo "   - public/data/课程评价数据.xlsx"
    echo "   - public/data/课程场次.csv"
    exit 1
fi

echo ""
echo "🎯 选择启动方式:"
echo "1) 启动个人站展示 (推荐)"
echo "2) 启动单独的自动数据加载器"
echo "3) 直接打开分析平台"
echo "4) 查看使用说明"
echo "5) 退出"
echo ""

read -p "请输入选择 (1-5): " choice

case $choice in
    1)
        echo "🌟 启动个人站展示 (推荐)..."
        echo "📋 检查开发环境..."
        
        # 检查Node.js和npm
        if ! command -v node &> /dev/null || ! command -v npm &> /dev/null; then
            echo "❌ 需要安装 Node.js 和 npm"
            echo "请访问 https://nodejs.org/ 下载安装"
            exit 1
        fi
        
        echo "✅ Node.js 版本: $(node --version)"
        echo "✅ npm 版本: $(npm --version)"
        
        echo "🚀 启动Next.js开发服务器..."
        npm run dev &
        SERVER_PID=$!
        
        echo "⏳ 等待服务器启动..."
        sleep 5
        
        echo "🌐 打开个人站作品集页面..."
        open http://localhost:3000/portfolio
        
        echo ""
        echo "🎉 成功启动！"
        echo "💡 点击「讲次评价分析平台」即可查看数据分析结果"
        echo "🔗 访问地址: http://localhost:3000/portfolio"
        echo ""
        echo "按 Ctrl+C 停止服务器"
        
        # 等待用户停止服务器
        wait $SERVER_PID
        ;;
    2)
        echo "🔄 启动单独的自动数据加载器..."
        open auto_data_loader.html
        echo "✅ 自动数据加载器已打开"
        echo "💡 提示: 点击「预览数据」检查文件，然后点击「自动加载数据」"
        ;;
    3)
        echo "📊 直接打开分析平台..."
        open public/satisfaction_dashboard/index.html
        echo "✅ 分析平台已打开"
        echo "💡 提示: 需要手动上传数据文件"
        ;;
    4)
        echo "📖 打开使用说明..."
        if command -v code &> /dev/null; then
            code 数据上传说明.md
        elif command -v open &> /dev/null; then
            open 数据上传说明.md
        else
            cat 数据上传说明.md
        fi
        ;;
    5)
        echo "👋 再见！"
        exit 0
        ;;
    *)
        echo "❌ 无效选择 (1-5)，请重新运行脚本"
        exit 1
        ;;
esac

echo ""
echo "🎉 启动完成！"
echo "如需帮助，请查看 数据上传说明.md 文件" 