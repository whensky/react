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
                        "參與html夾雜式PHP轉移至smarty階段",
                        "將散落的function集中至私有repositories統一由autoload引入，改善require亂象，也避免汙染",
                        "將inc接口轉移至redis，解決server搬遷時crontab困擾，更利於分散部屬",
                        "php laravel測試、借用Ioc 更進一步管理各 module 的相依，並切割nginx的rewrite設定，統一網址接口防止人為錯誤",
                        "python django導入、強大的admin功能 (python)"
                    ]
                },
                {
                    'title':"搜尋優化",
                    'detail':[
                        "以特定字詞為基準，建立子集合，確定搜尋字為主件或配件",
                        "導入主詞概念，以詞性區分，當雙主詞出現時辨別是否有贈品"
                    ]
                },
                {
                    'title':"流程優化",
                    'detail':[
                        "常用設定由hard code轉移至DB設計，並銜接各項內部API，減少程式碼更新的風險，也讓需求方可因應自己的需求去變更",
                        "crontab 排程轉移至jenkins、或以jenkins webhook及時觸發，統一管理排程，避免有幽靈排程狀況",
                        "使用者流程分析，Log蒐集、過濾raw data、relation切割、藉由預處理以ID為媒介，改善複雜join的速度；協助找出有價值的頁面",
                        "串接google sign-in統一多管理後台帳號，改善登入流程"
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