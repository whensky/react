# -*- coding: UTF-8 -*-
import json
import sys

reload(sys)
sys.setdefaultencoding('UTF-8')


d = {
        'SUMMARY':{
            'type':'detail',
            'data':[
                {
                    'title':"程式優化",
                    'detail':[
                        "參與html夾雜式PHP轉移至smarty",
                        "由 require 轉移至 autoload",
                        "php laravel測試 (Ioc、route)",
                        "python django導入、強大的admin功能 (python)"
                    ]
                },
                {
                    'title':"搜尋優化",
                    'detail':[
                        "以特定字詞基準，排除雜訊",
                        "凸顯字段特徵"
                    ]
                },
                {
                    'title':"流程優化",
                    'detail':[
                        "參數設定DB設計，並銜接各項內部API",
                        "jenkins排程、或jenkins webhook 執行work",
                        "使用者流程分析，Log蒐集、統計、SQL效能調整",
                        "google sign-in串接"
                    ]
                },
                {
                    'title':"網頁、App",
                    'detail':[
                        "Google Analytics、Google Tag Manager",
                        "api",
                        "頁面JS、template",
                        "推播系統"
                    ]
                }
            ]
        },

        'EDUCATION':{
            'type':'obj',
            'data':[
                "National Taipei University of Education",
                "Digital Design",
                "Taipei",
                "Graduated June 2015"
            ]
        },

        'EMPLOYMENT HISTORY':{
            'type':'obj',
            'data':[
                "易普網路股份有限公司",
                "back-end developer",
                "Taipei",
                "July 2016 - Present"
            ]
        },

        'HOBBIES & INTERESTS':{
            'type':'normal',
            'data':[
                "pursue the pure essence of things"
                ]
            },

        'PROFESSIONAL SKILLS':{
            'type':'percent',
            'data':[
                {'title':"linux",'data':3},
                {'title':"php",'data':4},
                {'title':"laravel",'data':3},
                {'title':"javascript",'data':3},
                {'title':"python",'data':2},
                {'title':"mysql",'data':3},
                {'title':"elasticsearch",'data':3},
                {'title':"mongodb",'data':2},
                {'title':"ssdb,redis",'data':3},
                {'title':"node",'data':1},
                {'title':"react",'data':1},
                {'title':"css",'data':2}
            ]
        },

        'LANGUAGES':{
            'type':'percent',
            'data':[
                {'title':"chinesse",'data':5},
                {'title':"english",'data':2}
            ]
        # },

        # "REFERENCE":{
        #     "type":"obj",
        #     "data":[
        #         "Lan",
        #         "Front-end Engineer",
        #         "17 Media",
        #         "Present"
        #     ]
        }
    }

print(json.dumps(d))