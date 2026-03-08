// config.js - 美团外卖红包配置文件
// 将此文件上传到 GitHub 仓库
// 链接格式：https://cdn.jsdelivr.net/gh/用户名/仓库名@分支名/config.js

const siteConfig = {
    "siteTitle": "美团 红包",
    "bgColor": "#FFD700",
    "header": {
        "enabled": true,
        "logoUrl": "",
        "text": "美团 包",
        "textColor": "#FF6B00",
        "fontSize": "24px",
        "fontWeight": "bold",
        "align": "center",
        "logoPosition": "left",
        "logoSize": "50px"
    },
    "carousel": [
        {
            "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
            "title": "品质外卖",
            "subtitle": "精选商家5折起",
            "link": "https://meituan.com"
        },
        {
            "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop",
            "title": "超 优惠",
            "subtitle": "新人 大礼包",
            "link": "https://meituan.com"
        },
        {
            "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
            "title": "限 特惠",
            "subtitle": "满3 10元",
            "link": "https://meituan.com"
        }
    ],
    "mainButton": {
        "text": "天天领红包",
        "color": "linear-gradient(135deg, #FF6B00, #FF9800)",
        "textColor": "#FFFFFF",
        "link": "https://meituan.com"
    },
    "subButtonsEnabled": true,
    "subButtons": {
        "button1": {
            "text": "品质会场(新)",
            "desc": "精选商家5折起",
            "link": "https://meituan.com"
        },
        "button2": {
            "text": "超值券包",
            "desc": "多张优惠券组合",
            "link": "https://meituan.com"
        }
    },
    "imageButtonsEnabled": true,
    "imageButtons": [
        {
            "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop",
            "text": "免 取",
            "link": "https://meituan.com"
        },
        {
            "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&auto=format&fit=crop",
            "text": "新 享",
            "link": "https://meituan.com"
        },
        {
            "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop",
            "text": "限 惠",
            "link": "https://meituan.com"
        }
    ],
    "tips": [
        "1. 先领完上方所有的券，领完后返回此页面，点击对应按钮即可使用券。",
        "2. 收货人手机 可以领两个红包。",
        "4. 优惠券有效期以领取时显示为准。"
    ]
};
