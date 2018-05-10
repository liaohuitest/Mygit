"use strict"

module.exports.model = function () {
    let modelimport = {
        common: function (defaultname,defaultdnsprefix,region,dbid) {
            let commonModel = {
                "AWSTemplateFormatVersion": "2010-09-09",
                "Metadata": {
                    "AWS::CloudFormation::Designer": {
                        "87d1d489-e039-4f68-8be7-f9186344ad0a": {
                            "size": {
                                "width": 560,
                                "height": 310
                            },
                            "position": {
                                "x": 250,
                                "y": -100
                            },
                            "z": 0,
                            "embeds": [
                                "c388d54f-f19f-4990-94ea-4a3ede131ddd",
                                "44725a6e-a8b4-42c1-bd26-e4bfa8389028",
                                "6fe52915-f823-4b50-a9be-ea6c3ce15ef1",
                                "f95fbd4b-6e67-4545-95ec-e2144fbe3444",
                                "dc7d3176-e46b-4a88-9377-000c4d21f492",
                                "2f1ec647-1bae-4cbf-8b11-704d6a8191dc",
                                "40ee1f55-2af4-42ca-9cb5-915abd8d9fa4",
                                "26a2d383-becb-4856-b075-a0b5e4e54079",
                                "a77c5325-efe2-4531-aac2-8c8917f7405c"
                            ]
                        },
                        "26a2d383-becb-4856-b075-a0b5e4e54079": {
                            "size": {
                                "width": 420,
                                "height": 240
                            },
                            "position": {
                                "x": 260,
                                "y": -30
                            },
                            "z": 1,
                            "parent": "87d1d489-e039-4f68-8be7-f9186344ad0a",
                            "embeds": [
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2",
                                "b3efd07f-9093-4053-b370-023ae05d6c3e",
                                "677763b2-49cc-4fff-99b2-ec6f716d764b",
                                "28d30d71-fccb-4335-b829-251eba243b2b",
                                "409c48f2-598c-4b6e-a761-7c397ab7f75c",
                                "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            ]
                        },
                        "40ee1f55-2af4-42ca-9cb5-915abd8d9fa4": {
                            "size": {
                                "width": 80,
                                "height": 80
                            },
                            "position": {
                                "x": 720,
                                "y": -10
                            },
                            "z": 1,
                            "parent": "87d1d489-e039-4f68-8be7-f9186344ad0a",
                            "embeds": []
                        },
                        "07671f84-dc3a-4edf-b6bf-95b38eb25f98": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 290,
                                "y": -200
                            },
                            "z": 0,
                            "embeds": []
                        },
                        "000a4f91-3fee-44e6-818f-c3754a6966c1": {
                            "source": {
                                "id": "07671f84-dc3a-4edf-b6bf-95b38eb25f98"
                            },
                            "target": {
                                "id": "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            },
                            "z": 0
                        },
                        "a77c5325-efe2-4531-aac2-8c8917f7405c": {
                            "size": {
                                "width": 140,
                                "height": 140
                            },
                            "position": {
                                "x": 306.0061422562379,
                                "y": -91.52542214962072
                            },
                            "z": 1,
                            "parent": "87d1d489-e039-4f68-8be7-f9186344ad0a",
                            "embeds": [
                                "ab11c568-6f50-41b6-a517-3701af7a8ceb"
                            ]
                        },
                        "ab11c568-6f50-41b6-a517-3701af7a8ceb": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 338.17777693430116,
                                "y": -67.30095981008763
                            },
                            "z": 2,
                            "parent": "a77c5325-efe2-4531-aac2-8c8917f7405c",
                            "embeds": [],
                            "references": [
                                "07671f84-dc3a-4edf-b6bf-95b38eb25f98"
                            ],
                            "dependson": [
                                "000a4f91-3fee-44e6-818f-c3754a6966c1"
                            ]
                        },
                        "a26d97c5-ab25-42e7-99a1-fe2fa3f4923a": {
                            "source": {
                                "id": "ab11c568-6f50-41b6-a517-3701af7a8ceb"
                            },
                            "target": {
                                "id": "000a4f91-3fee-44e6-818f-c3754a6966c1"
                            },
                            "z": 3
                        },
                        "2e45cd90-6af4-4b77-8a74-cf9f03d9e6d9": {
                            "source": {
                                "id": "8fe0cce0-ef10-4baa-bf55-986177c91960"
                            },
                            "target": {
                                "id": "ab11c568-6f50-41b6-a517-3701af7a8ceb"
                            },
                            "z": 4
                        },
                        "3f2e1e9a-33a0-4819-91f8-366bf0b2ee68": {
                            "source": {
                                "id": "a77c5325-efe2-4531-aac2-8c8917f7405c"
                            },
                            "target": {
                                "id": "26a2d383-becb-4856-b075-a0b5e4e54079"
                            },
                            "z": 1
                        },
                        "b667b118-df63-45c3-8af5-4c6bc18b929a": {
                            "source": {
                                "id": "8fe0cce0-ef10-4baa-bf55-986177c91960"
                            },
                            "target": {
                                "id": "51565d2e-99c3-4965-91e4-66629c0620d8"
                            },
                            "z": 6
                        },
                        "f88b54eb-efa4-4646-9c87-741d14ec6173": {
                            "source": {
                                "id": "a77c5325-efe2-4531-aac2-8c8917f7405c"
                            },
                            "target": {
                                "id": "40ee1f55-2af4-42ca-9cb5-915abd8d9fa4"
                            },
                            "z": 1
                        },
                        "2f1ec647-1bae-4cbf-8b11-704d6a8191dc": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 270,
                                "y": 20
                            },
                            "z": 2,
                            "parent": "87d1d489-e039-4f68-8be7-f9186344ad0a",
                            "embeds": []
                        },
                        "78b7289f-03ec-4e91-b2ee-15095eca3824": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 270,
                                "y": 130
                            },
                            "z": 2,
                            "parent": "26a2d383-becb-4856-b075-a0b5e4e54079",
                            "embeds": [],
                            "dependson": [
                                "2f1ec647-1bae-4cbf-8b11-704d6a8191dc",
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            ],
                            "isrelatedto": [
                                "2f1ec647-1bae-4cbf-8b11-704d6a8191dc"
                            ]
                        },
                        "3f409bd3-fa22-4968-bed4-a559ecfb33ef": {
                            "source": {
                                "id": "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            },
                            "target": {
                                "id": "2f1ec647-1bae-4cbf-8b11-704d6a8191dc"
                            },
                            "z": 3
                        },
                        "51c89a50-865a-4bc5-a397-9e038bef4ff5": {
                            "source": {
                                "id": "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            },
                            "target": {
                                "id": "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            },
                            "z": 3
                        },
                        "dc7d3176-e46b-4a88-9377-000c4d21f492": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 340,
                                "y": 20
                            },
                            "z": 2,
                            "parent": "87d1d489-e039-4f68-8be7-f9186344ad0a",
                            "embeds": []
                        },
                        "f95fbd4b-6e67-4545-95ec-e2144fbe3444": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 550,
                                "y": 20
                            },
                            "z": 2,
                            "parent": "87d1d489-e039-4f68-8be7-f9186344ad0a",
                            "embeds": []
                        },
                        "6fe52915-f823-4b50-a9be-ea6c3ce15ef1": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 410,
                                "y": 20
                            },
                            "z": 2,
                            "parent": "87d1d489-e039-4f68-8be7-f9186344ad0a",
                            "embeds": []
                        },
                        "44725a6e-a8b4-42c1-bd26-e4bfa8389028": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 480,
                                "y": 20
                            },
                            "z": 2,
                            "parent": "87d1d489-e039-4f68-8be7-f9186344ad0a",
                            "embeds": []
                        },
                        "c388d54f-f19f-4990-94ea-4a3ede131ddd": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 620,
                                "y": 20
                            },
                            "z": 2,
                            "parent": "87d1d489-e039-4f68-8be7-f9186344ad0a",
                            "embeds": []
                        },
                        "409c48f2-598c-4b6e-a761-7c397ab7f75c": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 340,
                                "y": 130
                            },
                            "z": 2,
                            "parent": "26a2d383-becb-4856-b075-a0b5e4e54079",
                            "embeds": [],
                            "dependson": [
                                "dc7d3176-e46b-4a88-9377-000c4d21f492",
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            ],
                            "isrelatedto": [
                                "2f1ec647-1bae-4cbf-8b11-704d6a8191dc",
                                "dc7d3176-e46b-4a88-9377-000c4d21f492"
                            ]
                        },
                        "28d30d71-fccb-4335-b829-251eba243b2b": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 550,
                                "y": 130
                            },
                            "z": 2,
                            "parent": "26a2d383-becb-4856-b075-a0b5e4e54079",
                            "embeds": [],
                            "dependson": [
                                "f95fbd4b-6e67-4545-95ec-e2144fbe3444",
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            ],
                            "isrelatedto": [
                                "2f1ec647-1bae-4cbf-8b11-704d6a8191dc",
                                "f95fbd4b-6e67-4545-95ec-e2144fbe3444"
                            ]
                        },
                        "677763b2-49cc-4fff-99b2-ec6f716d764b": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 410,
                                "y": 130
                            },
                            "z": 2,
                            "parent": "26a2d383-becb-4856-b075-a0b5e4e54079",
                            "embeds": [],
                            "dependson": [
                                "6fe52915-f823-4b50-a9be-ea6c3ce15ef1",
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            ],
                            "isrelatedto": [
                                "2f1ec647-1bae-4cbf-8b11-704d6a8191dc",
                                "6fe52915-f823-4b50-a9be-ea6c3ce15ef1"
                            ]
                        },
                        "b3efd07f-9093-4053-b370-023ae05d6c3e": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 480,
                                "y": 130
                            },
                            "z": 2,
                            "parent": "26a2d383-becb-4856-b075-a0b5e4e54079",
                            "embeds": [],
                            "dependson": [
                                "44725a6e-a8b4-42c1-bd26-e4bfa8389028",
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            ],
                            "isrelatedto": [
                                "2f1ec647-1bae-4cbf-8b11-704d6a8191dc",
                                "44725a6e-a8b4-42c1-bd26-e4bfa8389028"
                            ]
                        },
                        "e58128de-83b6-42a2-878e-b22eb9a37ac2": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 620,
                                "y": 130
                            },
                            "z": 2,
                            "parent": "26a2d383-becb-4856-b075-a0b5e4e54079",
                            "embeds": [],
                            "dependson": [
                                "c388d54f-f19f-4990-94ea-4a3ede131ddd"
                            ],
                            "isrelatedto": [
                                "2f1ec647-1bae-4cbf-8b11-704d6a8191dc",
                                "c388d54f-f19f-4990-94ea-4a3ede131ddd"
                            ]
                        },
                        "de1e11db-0a76-4507-864e-dccabdaf2ffe": {
                            "source": {
                                "id": "409c48f2-598c-4b6e-a761-7c397ab7f75c"
                            },
                            "target": {
                                "id": "dc7d3176-e46b-4a88-9377-000c4d21f492"
                            },
                            "z": 3
                        },
                        "4537efcf-36b9-4719-aa82-77f73d8ecca2": {
                            "source": {
                                "id": "677763b2-49cc-4fff-99b2-ec6f716d764b"
                            },
                            "target": {
                                "id": "6fe52915-f823-4b50-a9be-ea6c3ce15ef1"
                            },
                            "z": 4
                        },
                        "eb380686-3547-40aa-886b-3e8254159376": {
                            "source": {
                                "id": "b3efd07f-9093-4053-b370-023ae05d6c3e"
                            },
                            "target": {
                                "id": "44725a6e-a8b4-42c1-bd26-e4bfa8389028"
                            },
                            "z": 5
                        },
                        "f1a09100-3b2e-43aa-869d-c7bb6b61c45c": {
                            "source": {
                                "id": "28d30d71-fccb-4335-b829-251eba243b2b"
                            },
                            "target": {
                                "id": "f95fbd4b-6e67-4545-95ec-e2144fbe3444"
                            },
                            "z": 6
                        },
                        "1077ab26-84d0-4056-9235-c47aba5dd849": {
                            "source": {
                                "id": "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            },
                            "target": {
                                "id": "c388d54f-f19f-4990-94ea-4a3ede131ddd"
                            },
                            "z": 7
                        },
                        "dd710e5f-0149-42b5-b4a3-9937ec428476": {
                            "source": {
                                "id": "409c48f2-598c-4b6e-a761-7c397ab7f75c",
                                "selector": "g:nth-child(1) g:nth-child(4) g:nth-child(5) circle:nth-child(1)     ",
                                "port": "AWS::DependencyLink-*"
                            },
                            "target": {
                                "id": "dc7d3176-e46b-4a88-9377-000c4d21f492"
                            },
                            "z": 4
                        },
                        "166a0adb-321b-4ad7-8de3-2fd19e1e0018": {
                            "source": {
                                "id": "677763b2-49cc-4fff-99b2-ec6f716d764b",
                                "selector": "g:nth-child(1) g:nth-child(4) g:nth-child(5) circle:nth-child(1)     ",
                                "port": "AWS::DependencyLink-*"
                            },
                            "target": {
                                "id": "6fe52915-f823-4b50-a9be-ea6c3ce15ef1"
                            },
                            "z": 4
                        },
                        "b9470b14-baae-43ee-b1e3-f6203ebb3955": {
                            "source": {
                                "id": "b3efd07f-9093-4053-b370-023ae05d6c3e",
                                "selector": "g:nth-child(1) g:nth-child(4) g:nth-child(5) circle:nth-child(1)     ",
                                "port": "AWS::DependencyLink-*"
                            },
                            "target": {
                                "id": "44725a6e-a8b4-42c1-bd26-e4bfa8389028"
                            },
                            "z": 4
                        },
                        "3f973e0f-4861-4d21-a072-460afe517342": {
                            "source": {
                                "id": "28d30d71-fccb-4335-b829-251eba243b2b",
                                "selector": "g:nth-child(1) g:nth-child(4) g:nth-child(5) circle:nth-child(1)     ",
                                "port": "AWS::DependencyLink-*"
                            },
                            "target": {
                                "id": "f95fbd4b-6e67-4545-95ec-e2144fbe3444"
                            },
                            "z": 4
                        },
                        "17b49e79-d916-4249-9a7e-d853cee4fa1d": {
                            "source": {
                                "id": "e58128de-83b6-42a2-878e-b22eb9a37ac2",
                                "selector": "g:nth-child(1) g:nth-child(4) g:nth-child(5) circle:nth-child(1)     ",
                                "port": "AWS::DependencyLink-*"
                            },
                            "target": {
                                "id": "c388d54f-f19f-4990-94ea-4a3ede131ddd"
                            },
                            "z": 4
                        },
                        "d0b341f2-559e-40b1-8ab5-f317ff46135f": {
                            "source": {
                                "id": "409c48f2-598c-4b6e-a761-7c397ab7f75c",
                                "selector": "g:nth-child(1) g:nth-child(4) g:nth-child(5) circle:nth-child(1)     ",
                                "port": "AWS::DependencyLink-*"
                            },
                            "target": {
                                "id": "dc7d3176-e46b-4a88-9377-000c4d21f492"
                            },
                            "z": 4
                        },
                        "ef686469-2583-4bb1-8f69-7039b358a811": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 410,
                                "y": 470
                            },
                            "z": 0,
                            "embeds": [],
                            "dependson": [
                                "66f4bb42-7c9c-4c9e-bab7-0dc724d13b11"
                            ],
                            "isrelatedto": [
                                "66f4bb42-7c9c-4c9e-bab7-0dc724d13b11",
                                "26a2d383-becb-4856-b075-a0b5e4e54079"
                            ]
                        },
                        "8bc85651-2a0b-495d-82e4-0bf516f30c43": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 270,
                                "y": 230
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            ],
                            "isrelatedto": [
                                "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            ]
                        },
                        "0ee495ce-76f3-4f88-938e-94ef2620858c": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 340,
                                "y": 230
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "409c48f2-598c-4b6e-a761-7c397ab7f75c"
                            ],
                            "isrelatedto": [
                                "409c48f2-598c-4b6e-a761-7c397ab7f75c"
                            ]
                        },
                        "b6afb9d3-5868-4f50-932a-3aa75cf7fa00": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 410,
                                "y": 230
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "677763b2-49cc-4fff-99b2-ec6f716d764b"
                            ],
                            "isrelatedto": [
                                "677763b2-49cc-4fff-99b2-ec6f716d764b"
                            ]
                        },
                        "de2bf157-2b1e-416b-8c2e-769bb93f20a9": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 480,
                                "y": 230
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "b3efd07f-9093-4053-b370-023ae05d6c3e"
                            ],
                            "isrelatedto": [
                                "b3efd07f-9093-4053-b370-023ae05d6c3e"
                            ]
                        },
                        "b5172306-96a7-40ae-8bff-c8fcdb2c369c": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 550,
                                "y": 230
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "28d30d71-fccb-4335-b829-251eba243b2b"
                            ],
                            "isrelatedto": [
                                "28d30d71-fccb-4335-b829-251eba243b2b"
                            ]
                        },
                        "722dcf78-862f-4ecc-ac4c-57e607129976": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 270,
                                "y": 330
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "8bc85651-2a0b-495d-82e4-0bf516f30c43"
                            ]
                        },
                        "6f4ba9b1-926e-4fe5-a2f6-1fe32ca407e2": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 340,
                                "y": 330
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "0ee495ce-76f3-4f88-938e-94ef2620858c"
                            ]
                        },
                        "11296b0e-803a-4d03-96b8-2e12f5fbc16d": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 410,
                                "y": 330
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "b6afb9d3-5868-4f50-932a-3aa75cf7fa00"
                            ]
                        },
                        "a19fad2d-08f4-44f0-a1ce-40fadb39b348": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 480,
                                "y": 330
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "de2bf157-2b1e-416b-8c2e-769bb93f20a9"
                            ]
                        },
                        "499bead6-6ca1-46d9-8366-4de1782349fd": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 550,
                                "y": 330
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "b5172306-96a7-40ae-8bff-c8fcdb2c369c"
                            ]
                        },
                        "66f4bb42-7c9c-4c9e-bab7-0dc724d13b11": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 520,
                                "y": 470
                            },
                            "z": 0,
                            "embeds": []
                        },
                        "939c9636-fc91-483c-9b6e-eb23cc9dc940": {
                            "source": {
                                "id": "ef686469-2583-4bb1-8f69-7039b358a811"
                            },
                            "target": {
                                "id": "66f4bb42-7c9c-4c9e-bab7-0dc724d13b11"
                            },
                            "z": 11
                        },
                        "80ae5c24-49b0-43d9-938f-1fef48c06c0f": {
                            "source": {
                                "id": "8bc85651-2a0b-495d-82e4-0bf516f30c43"
                            },
                            "target": {
                                "id": "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            },
                            "z": 11
                        },
                        "6e160c70-fbda-4c98-9e55-5f8c1782831e": {
                            "source": {
                                "id": "0ee495ce-76f3-4f88-938e-94ef2620858c"
                            },
                            "target": {
                                "id": "409c48f2-598c-4b6e-a761-7c397ab7f75c"
                            },
                            "z": 12
                        },
                        "b841ff4c-7c59-4248-89d5-6e2a52602c21": {
                            "source": {
                                "id": "b6afb9d3-5868-4f50-932a-3aa75cf7fa00"
                            },
                            "target": {
                                "id": "677763b2-49cc-4fff-99b2-ec6f716d764b"
                            },
                            "z": 13
                        },
                        "28726d54-071c-4302-9438-71d821f2cc21": {
                            "source": {
                                "id": "de2bf157-2b1e-416b-8c2e-769bb93f20a9"
                            },
                            "target": {
                                "id": "b3efd07f-9093-4053-b370-023ae05d6c3e"
                            },
                            "z": 14
                        },
                        "1a8f5736-f291-43cc-9e95-e18d1e63c437": {
                            "source": {
                                "id": "b5172306-96a7-40ae-8bff-c8fcdb2c369c"
                            },
                            "target": {
                                "id": "28d30d71-fccb-4335-b829-251eba243b2b"
                            },
                            "z": 15
                        },
                        "7bd6df12-e949-4ee1-850e-f7efed7b2579": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 1230,
                                "y": 290
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "28d30d71-fccb-4335-b829-251eba243b2b",
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            ],
                            "isrelatedto": [
                                "28d30d71-fccb-4335-b829-251eba243b2b",
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            ]
                        },
                        "d77538c7-927f-4e8b-81cf-20bd4c181bdb": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 1230,
                                "y": 390
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "dependson": [
                                "7bd6df12-e949-4ee1-850e-f7efed7b2579"
                            ],
                            "isrelatedto": [
                                "b5172306-96a7-40ae-8bff-c8fcdb2c369c",
                                "7bd6df12-e949-4ee1-850e-f7efed7b2579"
                            ]
                        },
                        "6702baf8-6fa6-449c-8dff-cde33ce8c2f6": {
                            "source": {
                                "id": "d77538c7-927f-4e8b-81cf-20bd4c181bdb"
                            },
                            "target": {
                                "id": "7bd6df12-e949-4ee1-850e-f7efed7b2579"
                            },
                            "z": 11
                        },
                        "64de8222-b791-41f1-a492-f0eada30d128": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 880,
                                "y": 390
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "41773f1a-097b-4ba5-959b-aa6f23b3a91e"
                            ]
                        },
                        "27205466-0c16-4ba4-9d9a-19232ba7e5bf": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 950,
                                "y": 390
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "2d55657a-1cb9-435e-91cc-b962a18a4929"
                            ]
                        },
                        "c48a9af1-95bb-4ae9-88da-56095a284d63": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 1020,
                                "y": 390
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "e114dabd-f88d-4d42-952a-4ad9d84fde08"
                            ]
                        },
                        "41f7e2c1-fe83-4dd9-a966-b55bcae03dcc": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 1090,
                                "y": 390
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "d1fa7456-1ae5-4b42-841e-7efdaf36aca5"
                            ]
                        },
                        "481fb7e3-f16a-4f76-b845-586500f53044": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 1160,
                                "y": 390
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "00c66412-d9eb-41f9-b0be-5bbbc60834a8"
                            ]
                        },
                        "41773f1a-097b-4ba5-959b-aa6f23b3a91e": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 880,
                                "y": 290
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            ],
                            "isrelatedto": [
                                "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            ]
                        },
                        "2d55657a-1cb9-435e-91cc-b962a18a4929": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 950,
                                "y": 290
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "409c48f2-598c-4b6e-a761-7c397ab7f75c"
                            ],
                            "isrelatedto": [
                                "409c48f2-598c-4b6e-a761-7c397ab7f75c"
                            ]
                        },
                        "e114dabd-f88d-4d42-952a-4ad9d84fde08": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 1020,
                                "y": 290
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "677763b2-49cc-4fff-99b2-ec6f716d764b"
                            ],
                            "isrelatedto": [
                                "677763b2-49cc-4fff-99b2-ec6f716d764b"
                            ]
                        },
                        "d1fa7456-1ae5-4b42-841e-7efdaf36aca5": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 1090,
                                "y": 290
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "b3efd07f-9093-4053-b370-023ae05d6c3e"
                            ],
                            "isrelatedto": [
                                "b3efd07f-9093-4053-b370-023ae05d6c3e"
                            ]
                        },
                        "00c66412-d9eb-41f9-b0be-5bbbc60834a8": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 1160,
                                "y": 290
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "28d30d71-fccb-4335-b829-251eba243b2b"
                            ],
                            "isrelatedto": [
                                "28d30d71-fccb-4335-b829-251eba243b2b"
                            ]
                        },
                        "5c405a2e-dfd6-4172-bba5-462fb7e8ef02": {
                            "source": {
                                "id": "41773f1a-097b-4ba5-959b-aa6f23b3a91e"
                            },
                            "target": {
                                "id": "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            },
                            "z": 11
                        },
                        "edff9e75-b4e0-4556-8c51-c4910df9de5a": {
                            "source": {
                                "id": "2d55657a-1cb9-435e-91cc-b962a18a4929"
                            },
                            "target": {
                                "id": "409c48f2-598c-4b6e-a761-7c397ab7f75c"
                            },
                            "z": 12
                        },
                        "ed315d1b-4404-42c3-887f-9a49bdfc62f4": {
                            "source": {
                                "id": "e114dabd-f88d-4d42-952a-4ad9d84fde08"
                            },
                            "target": {
                                "id": "677763b2-49cc-4fff-99b2-ec6f716d764b"
                            },
                            "z": 13
                        },
                        "2e3e5c01-3514-4e76-b74c-a8826b9c9b63": {
                            "source": {
                                "id": "d1fa7456-1ae5-4b42-841e-7efdaf36aca5"
                            },
                            "target": {
                                "id": "b3efd07f-9093-4053-b370-023ae05d6c3e"
                            },
                            "z": 14
                        },
                        "6feacafb-4f5f-46d8-a34c-0fef26c35c20": {
                            "source": {
                                "id": "00c66412-d9eb-41f9-b0be-5bbbc60834a8"
                            },
                            "target": {
                                "id": "28d30d71-fccb-4335-b829-251eba243b2b"
                            },
                            "z": 15
                        },
                        "ef84f69c-e5ab-4300-8983-b233d163aee1": {
                            "source": {
                                "id": "7bd6df12-e949-4ee1-850e-f7efed7b2579",
                                "selector": "g:nth-child(1) g:nth-child(4) g:nth-child(2) circle:nth-child(1)     ",
                                "port": "AWS::DependencyLink-*"
                            },
                            "target": {
                                "id": "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            },
                            "z": 12
                        },
                        "fe2a9b23-290f-4864-ad49-263fb776b86e": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 620,
                                "y": 230
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            ],
                            "dependson": [
                                "28d30d71-fccb-4335-b829-251eba243b2b",
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            ],
                            "isrelatedto": [
                                "28d30d71-fccb-4335-b829-251eba243b2b",
                                "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            ]
                        },
                        "1d1a0013-645e-4a72-9c2d-f2dd5dd35c7c": {
                            "size": {
                                "width": 60,
                                "height": 60
                            },
                            "position": {
                                "x": 620,
                                "y": 330
                            },
                            "z": 0,
                            "embeds": [],
                            "isassociatedwith": [
                                "ef686469-2583-4bb1-8f69-7039b358a811"
                            ],
                            "isrelatedto": [
                                "b5172306-96a7-40ae-8bff-c8fcdb2c369c",
                                "fe2a9b23-290f-4864-ad49-263fb776b86e"
                            ]
                        },
                        "abf181ef-8257-4c43-8144-f81c1c088632": {
                            "source": {
                                "id": "28d30d71-fccb-4335-b829-251eba243b2b"
                            },
                            "target": {
                                "id": "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            },
                            "z": 11
                        },
                        "2cd6d59b-a543-473c-b10b-2fc72217599c": {
                            "source": {
                                "id": "b3efd07f-9093-4053-b370-023ae05d6c3e"
                            },
                            "target": {
                                "id": "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            },
                            "z": 12
                        },
                        "d3a754c3-415c-4ced-8edb-e87797561306": {
                            "source": {
                                "id": "677763b2-49cc-4fff-99b2-ec6f716d764b"
                            },
                            "target": {
                                "id": "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            },
                            "z": 13
                        },
                        "cce7998e-6c88-4b42-96a5-65d930789ca8": {
                            "source": {
                                "id": "409c48f2-598c-4b6e-a761-7c397ab7f75c"
                            },
                            "target": {
                                "id": "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            },
                            "z": 14
                        },
                        "767bc79e-ee14-463c-aae3-8572890c31cf": {
                            "source": {
                                "id": "78b7289f-03ec-4e91-b2ee-15095eca3824"
                            },
                            "target": {
                                "id": "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            },
                            "z": 15
                        }
                    }
                },
                "Parameters": {
                    "UserID": {
                        "Type": "String",
                        "Default": defaultname,
                        "Description": "user UserID for the prefix of component's names"
                    },
                    "DNSprefix": {
                        "Type": "String",
                        "Default": defaultdnsprefix,
                        "Description": "user UserID for the prefix of component's names"
                    },
                    "Region1a": {
                        "Type": "String",
                        "Default": region+'a',
                        "Description": "user UserID for the prefix of component's names"
                    },
                    "Region1c": {
                        "Type": "String",
                        "Default": region+'c',
                        "Description": "user UserID for the prefix of component's names"
                    }
                },
                "Resources": {
                    "UserIGW": {
                        "Type": "AWS::EC2::InternetGateway",
                        "Properties": {
                            "Tags": [
                                {
                                    "Key": "Name",
                                    "Value": {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Ref": "UserID"
                                                },
                                                "-sp-igw"
                                            ]
                                        ]
                                    }
                                }
                            ]
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "07671f84-dc3a-4edf-b6bf-95b38eb25f98"
                            }
                        }
                    },
                    "UserVPC": {
                        "Type": "AWS::EC2::VPC",
                        "Properties": {
                            "CidrBlock": "172.30.0.0/16",
                            "EnableDnsHostnames": "true",
                            "EnableDnsSupport": "true",
                            "InstanceTenancy": "default",
                            "Tags": [
                                {
                                    "Key": "Name",
                                    "Value": {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Ref": "UserID"
                                                },
                                                "-sp-vpc"
                                            ]
                                        ]
                                    }
                                }
                            ]
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "87d1d489-e039-4f68-8be7-f9186344ad0a"
                            }
                        }
                    },
                    "UserInternetRoute": {
                        "Type": "AWS::EC2::Route",
                        "Properties": {
                            "DestinationCidrBlock": "0.0.0.0/0",
                            "GatewayId": {
                                "Ref": "UserIGW"
                            },
                            "RouteTableId": {
                                "Ref": "UserRouteTable"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "ab11c568-6f50-41b6-a517-3701af7a8ceb"
                            }
                        },
                        "DependsOn": [
                            "UserIGWtoVPC"
                        ]
                    },
                    "UserRouteTable": {
                        "Type": "AWS::EC2::RouteTable",
                        "Properties": {
                            "Tags": [
                                {
                                    "Key": "Name",
                                    "Value": {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Ref": "UserID"
                                                },
                                                "-sp-routetable"
                                            ]
                                        ]
                                    }
                                }
                            ],
                            "VpcId": {
                                "Ref": "UserVPC"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "a77c5325-efe2-4531-aac2-8c8917f7405c"
                            }
                        }
                    },
                    "UserSubnet1": {
                        "Type": "AWS::EC2::Subnet",
                        "Properties": {
                            "AvailabilityZone": {"Ref": "Region1a"},
                            "CidrBlock": "172.30.0.0/24",
                            "MapPublicIpOnLaunch": "false",
                            "Tags": [
                                {
                                    "Key": "Name",
                                    "Value": {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Ref": "UserID"
                                                },
                                                "-sp-subnet1"
                                            ]
                                        ]
                                    }
                                }
                            ],
                            "VpcId": {
                                "Ref": "UserVPC"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "26a2d383-becb-4856-b075-a0b5e4e54079"
                            }
                        }
                    },
                    "UserSubnet2": {
                        "Type": "AWS::EC2::Subnet",
                        "Properties": {
                            "AvailabilityZone": {"Ref": "Region1c"},
                            "CidrBlock": "172.30.1.0/24",
                            "MapPublicIpOnLaunch": "false",
                            "Tags": [
                                {
                                    "Key": "Name",
                                    "Value": {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Ref": "UserID"
                                                },
                                                "-sp-subnet2"
                                            ]
                                        ]
                                    }
                                }
                            ],
                            "VpcId": {
                                "Ref": "UserVPC"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "40ee1f55-2af4-42ca-9cb5-915abd8d9fa4"
                            }
                        }
                    },
                    "UserIGWtoVPC": {
                        "Type": "AWS::EC2::VPCGatewayAttachment",
                        "Properties": {
                            "InternetGatewayId": {
                                "Ref": "UserIGW"
                            },
                            "VpcId": {
                                "Ref": "UserVPC"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "000a4f91-3fee-44e6-818f-c3754a6966c1"
                            }
                        }
                    },
                    "UserRouteTabletoSubnet1": {
                        "Type": "AWS::EC2::SubnetRouteTableAssociation",
                        "Properties": {
                            "RouteTableId": {
                                "Ref": "UserRouteTable"
                            },
                            "SubnetId": {
                                "Ref": "UserSubnet1"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "3f2e1e9a-33a0-4819-91f8-366bf0b2ee68"
                            }
                        }
                    },
                    "UserRouteTabletoSubnet2": {
                        "Type": "AWS::EC2::SubnetRouteTableAssociation",
                        "Properties": {
                            "RouteTableId": {
                                "Ref": "UserRouteTable"
                            },
                            "SubnetId": {
                                "Ref": "UserSubnet2"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "f88b54eb-efa4-4646-9c87-741d14ec6173"
                            }
                        }
                    },
                    "UserSGforDB": {
                        "Type": "AWS::EC2::SecurityGroup",
                        "Properties": {
                            "GroupName": {
                                "Fn::Join": [
                                    "",
                                    [
                                        {
                                            "Ref": "UserID"
                                        },
                                        "-sp-sg-for-db"
                                    ]
                                ]
                            },
                            "GroupDescription": {
                                "Fn::Join": [
                                    "",
                                    [
                                        {
                                            "Ref": "UserID"
                                        },
                                        "-sp-sg-for-db"
                                    ]
                                ]
                            },
                            "SecurityGroupIngress": [
                                {
                                    "IpProtocol": "tcp",
                                    "FromPort": "22",
                                    "ToPort": "22",
                                    "CidrIp": "0.0.0.0/0"
                                },
                                {
                                    "IpProtocol": "tcp",
                                    "FromPort": "1521",
                                    "ToPort": "1521",
                                    "CidrIp": "0.0.0.0/0"
                                }
                            ],
                            "Tags": [
                                {
                                    "Key": "Name",
                                    "Value": {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Ref": "UserID"
                                                },
                                                "-sp-sg-for-db"
                                            ]
                                        ]
                                    }
                                }
                            ],
                            "VpcId": {
                                "Ref": "UserVPC"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "c388d54f-f19f-4990-94ea-4a3ede131ddd"
                            }
                        }
                    },
                    "UserDB": {
                        "Type": "AWS::EC2::Instance",
                        "Properties": {
                            "AvailabilityZone": {"Ref": "Region1a"},
                            "BlockDeviceMappings": [
                                {
                                    "DeviceName": "/dev/sda1",
                                    "Ebs": {
                                        "VolumeType": "gp2",
                                        "DeleteOnTermination": "true",
                                        "VolumeSize": "100"
                                    }
                                },
                                {
                                    "DeviceName": "/dev/sdb",
                                    "Ebs": {
                                        "VolumeType": "gp2",
                                        "DeleteOnTermination": "true",
                                        "VolumeSize": "1024"
                                    }
                                }
                            ],
                            "EbsOptimized": "true",
                            "ImageId": dbid,
                            "InstanceInitiatedShutdownBehavior": "stop",
                            "InstanceType": "m4.4xlarge",
                            "KeyName": "ssh_key_osp",
                            "Monitoring": "false",
                            "NetworkInterfaces": [
                                {
                                    "AssociatePublicIpAddress": "false",
                                    "Description": {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Ref": "UserID"
                                                },
                                                "-sp-db-eth0"
                                            ]
                                        ]
                                    },
                                    "DeviceIndex": "0",
                                    "GroupSet": [
                                        {
                                            "Ref": "UserSGforDB"
                                        }
                                    ],
                                    "SubnetId": {
                                        "Ref": "UserSubnet1"
                                    },
                                    "PrivateIpAddress": "172.30.0.22"
                                }
                            ],
                            "Tags": [
                                {
                                    "Key": "Name",
                                    "Value": {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Ref": "UserID"
                                                },
                                                "-sp-db"
                                            ]
                                        ]
                                    }
                                }
                            ]
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "e58128de-83b6-42a2-878e-b22eb9a37ac2"
                            }
                        },
                        "DependsOn": [
                            "UserSGforDB"
                        ]
                    },
                    "UserTGforDB": {
                        "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                        "Properties": {
                            "Name": {
                                "Fn::Join": [
                                    "",
                                    [
                                        {
                                            "Ref": "UserID"
                                        },
                                        "-sp-tg-for-db"
                                    ]
                                ]
                            },
                            "Port": 1521,
                            "Protocol": "TCP",
                            "Targets": [
                                {
                                    "Id": {
                                        "Ref": "UserDB"
                                    },
                                    "Port": 1521
                                }
                            ],
                            "TargetType": "instance",
                            "VpcId": {
                                "Ref": "UserVPC"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "fe2a9b23-290f-4864-ad49-263fb776b86e"
                            }
                        },
                        "DependsOn": [
                            "UserDB"
                        ]
                    },
                    "UserListenerforDB": {
                        "Type": "AWS::ElasticLoadBalancingV2::Listener",
                        "Properties": {
                            "DefaultActions": [
                                {
                                    "Type": "forward",
                                    "TargetGroupArn": {
                                        "Ref": "UserTGforDB"
                                    }
                                }
                            ],
                            "LoadBalancerArn": {
                                "Ref": "UserELB"
                            },
                            "Port": "1521",
                            "Protocol": "TCP"
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "1d1a0013-645e-4a72-9c2d-f2dd5dd35c7c"
                            }
                        }
                    },
                    "UserSSHTGforDB": {
                        "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                        "Properties": {
                            "Name": {
                                "Fn::Join": [
                                    "",
                                    [
                                        {
                                            "Ref": "UserID"
                                        },
                                        "-sp-sshtg-for-db"
                                    ]
                                ]
                            },
                            "Port": 22022,
                            "Protocol": "TCP",
                            "Targets": [
                                {
                                    "Id": {
                                        "Ref": "UserDB"
                                    },
                                    "Port": 22
                                }
                            ],
                            "TargetType": "instance",
                            "VpcId": {
                                "Ref": "UserVPC"
                            }
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "7bd6df12-e949-4ee1-850e-f7efed7b2579"
                            }
                        },
                        "DependsOn": [
                            "UserDB"
                        ]
                    },
                    "UserSSHListenerforDB": {
                        "Type": "AWS::ElasticLoadBalancingV2::Listener",
                        "Properties": {
                            "DefaultActions": [
                                {
                                    "Type": "forward",
                                    "TargetGroupArn": {
                                        "Ref": "UserSSHTGforDB"
                                    }
                                }
                            ],
                            "LoadBalancerArn": {
                                "Ref": "UserELB"
                            },
                            "Port": "22022",
                            "Protocol": "TCP"
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "d77538c7-927f-4e8b-81cf-20bd4c181bdb"
                            }
                        }
                    },
                    "UserELB": {
                        "Type": "AWS::ElasticLoadBalancingV2::LoadBalancer",
                        "Properties": {
                            "Name": {
                                            "Ref": "DNSprefix"
                            },
                            "Scheme": "internet-facing",
                            "SubnetMappings": [
                                {
                                    "AllocationId": {
                                        "Fn::GetAtt": [
                                            "UserEIPforELB",
                                            "AllocationId"
                                        ]
                                    },
                                    "SubnetId": {
                                        "Ref": "UserSubnet1"
                                    }
                                }
                            ],
                            "Type": "network",
                            "IpAddressType": "ipv4"
                        },
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "ef686469-2583-4bb1-8f69-7039b358a811"
                            }
                        },
                        "DependsOn": [
                            "UserEIPforELB"
                        ]
                    },
                    "UserEIPforELB": {
                        "Type": "AWS::EC2::EIP",
                        "Properties": {},
                        "Metadata": {
                            "AWS::CloudFormation::Designer": {
                                "id": "66f4bb42-7c9c-4c9e-bab7-0dc724d13b11"
                            }
                        }
                    }
                },
                "Outputs": {
                    "PublicURL": {
                        "Value": {
                            "Fn::GetAtt": [
                                "UserELB",
                                "DNSName"
                            ]
                        }
                    },
                    "PublicIP": {
                        "Value": {
                            "Ref": "UserEIPforELB"
                        }
                    }
                }
            };
            return commonModel
        },
        OM: function (omid) {
            let omModel = {
                "UserSGforOM": {
                    "Type": "AWS::EC2::SecurityGroup",
                    "Properties": {
                        "GroupName": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-om"
                                ]
                            ]
                        },
                        "GroupDescription": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-om"
                                ]
                            ]
                        },
                        "SecurityGroupIngress": [
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "22",
                                "ToPort": "22",
                                "CidrIp": "0.0.0.0/0"
                            },
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "8080",
                                "ToPort": "8080",
                                "CidrIp": "0.0.0.0/0"
                            },
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "6080",
                                "ToPort": "6080",
                                "CidrIp": "0.0.0.0/0"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-sg-for-om"
                                        ]
                                    ]
                                }
                            }
                        ],
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "dc7d3176-e46b-4a88-9377-000c4d21f492"
                        }
                    }
                },
                "UserOM": {
                    "Type": "AWS::EC2::Instance",
                    "Properties": {
                        "AvailabilityZone": {"Ref": "Region1a"},
                        "BlockDeviceMappings": [
                            {
                                "DeviceName": "/dev/sda1",
                                "Ebs": {
                                    "VolumeType": "gp2",
                                    "DeleteOnTermination": "true",
                                    "VolumeSize": "100"
                                }
                            }
                        ],
                        "EbsOptimized": "true",
                        "ImageId": omid,
                        "InstanceInitiatedShutdownBehavior": "stop",
                        "InstanceType": "m4.xlarge",
                        "KeyName": "ssh_key_osp",
                        "Monitoring": "false",
                        "NetworkInterfaces": [
                            {
                                "AssociatePublicIpAddress": "false",
                                "Description": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-om-eth0"
                                        ]
                                    ]
                                },
                                "DeviceIndex": "0",
                                "GroupSet": [
                                    {
                                        "Ref": "UserSGforOM"
                                    }
                                ],
                                "SubnetId": {
                                    "Ref": "UserSubnet1"
                                },
                                "PrivateIpAddress": "172.30.0.12"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-om"
                                        ]
                                    ]
                                }
                            }
                        ]
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "409c48f2-598c-4b6e-a761-7c397ab7f75c"
                        }
                    },
                    "DependsOn": [
                        "UserSGforOM",
                        "UserDB"
                    ]
                },
                "UserTGforOM": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-tg-for-om"
                                ]
                            ]
                        },
                        "Port": 9001,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserOM"
                                },
                                "Port": 6080
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "0ee495ce-76f3-4f88-938e-94ef2620858c"
                        }
                    },
                    "DependsOn": [
                        "UserOM"
                    ]
                },
                "UserListenerforOM": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserTGforOM"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "9001",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "6f4ba9b1-926e-4fe5-a2f6-1fe32ca407e2"
                        }
                    }
                },
                "UserSSHTGforOM": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sshtg-for-om"
                                ]
                            ]
                        },
                        "Port": 12022,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserOM"
                                },
                                "Port": 22
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "2d55657a-1cb9-435e-91cc-b962a18a4929"
                        }
                    },
                    "DependsOn": [
                        "UserOM"
                    ]
                },
                "UserSSHListenerforOM": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserSSHTGforOM"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "12022",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "27205466-0c16-4ba4-9d9a-19232ba7e5bf"
                        }
                    }
                }
            };
            return omModel
        },
        AM: function (amid) {
            let amModel = {
                "UserSGforAM": {
                    "Type": "AWS::EC2::SecurityGroup",
                    "Properties": {
                        "GroupName": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-am"
                                ]
                            ]
                        },
                        "GroupDescription": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-am"
                                ]
                            ]
                        },
                        "SecurityGroupIngress": [
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "22",
                                "ToPort": "22",
                                "CidrIp": "0.0.0.0/0"
                            },
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "7001",
                                "ToPort": "7001",
                                "CidrIp": "0.0.0.0/0"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-sg-for-am"
                                        ]
                                    ]
                                }
                            }
                        ],
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "2f1ec647-1bae-4cbf-8b11-704d6a8191dc"
                        }
                    }
                },
                "UserAM": {
                    "Type": "AWS::EC2::Instance",
                    "Properties": {
                        "AvailabilityZone": {"Ref": "Region1a"},
                        "BlockDeviceMappings": [
                            {
                                "DeviceName": "/dev/sda1",
                                "Ebs": {
                                    "VolumeType": "gp2",
                                    "DeleteOnTermination": "true",
                                    "VolumeSize": "100"
                                }
                            }
                        ],
                        "EbsOptimized": "true",
                        "ImageId": amid,
                        "InstanceInitiatedShutdownBehavior": "stop",
                        "InstanceType": "m4.xlarge",
                        "KeyName": "ssh_key_osp",
                        "Monitoring": "false",
                        "NetworkInterfaces": [
                            {
                                "AssociatePublicIpAddress": "false",
                                "Description": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-am-eth0"
                                        ]
                                    ]
                                },
                                "DeviceIndex": "0",
                                "GroupSet": [
                                    {
                                        "Ref": "UserSGforAM"
                                    }
                                ],
                                "SubnetId": {
                                    "Ref": "UserSubnet1"
                                },
                                "PrivateIpAddress": "172.30.0.16"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-am"
                                        ]
                                    ]
                                }
                            }
                        ]
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "78b7289f-03ec-4e91-b2ee-15095eca3824"
                        }
                    },
                    "DependsOn": [
                        "UserSGforAM",
                        "UserDB"
                    ]
                },
                "UserTGforAM": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-tg-for-am"
                                ]
                            ]
                        },
                        "Port": 9003,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserAM"
                                },
                                "Port": 7001
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "8bc85651-2a0b-495d-82e4-0bf516f30c43"
                        }
                    },
                    "DependsOn": [
                        "UserAM"
                    ]
                },
                "UserListenerforAM": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserTGforAM"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "9003",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "722dcf78-862f-4ecc-ac4c-57e607129976"
                        }
                    }
                },
                "UserSSHTGforAM": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sshtg-for-am"
                                ]
                            ]
                        },
                        "Port": 16022,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserAM"
                                },
                                "Port": 22
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "41773f1a-097b-4ba5-959b-aa6f23b3a91e"
                        }
                    },
                    "DependsOn": [
                        "UserAM"
                    ]
                },
                "UserSSHListenerforAM": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserSSHTGforAM"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "16022",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "64de8222-b791-41f1-a492-f0eada30d128"
                        }
                    }
                }
            };
            return amModel
        },
        IM: function (imid) {
            let imModel = {
                "UserSGforIM": {
                    "Type": "AWS::EC2::SecurityGroup",
                    "Properties": {
                        "GroupName": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-im"
                                ]
                            ]
                        },
                        "GroupDescription": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-im"
                                ]
                            ]
                        },
                        "SecurityGroupIngress": [
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "22",
                                "ToPort": "22",
                                "CidrIp": "0.0.0.0/0"
                            },
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "9091",
                                "ToPort": "9091",
                                "CidrIp": "0.0.0.0/0"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-sg-for-im"
                                        ]
                                    ]
                                }
                            }
                        ],
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "f95fbd4b-6e67-4545-95ec-e2144fbe3444"
                        }
                    }
                },
                "UserIM": {
                    "Type": "AWS::EC2::Instance",
                    "Properties": {
                        "AvailabilityZone": {"Ref": "Region1a"},
                        "BlockDeviceMappings": [
                            {
                                "DeviceName": "/dev/sda1",
                                "Ebs": {
                                    "VolumeType": "gp2",
                                    "DeleteOnTermination": "true",
                                    "VolumeSize": "100"
                                }
                            }
                        ],
                        "EbsOptimized": "true",
                        "ImageId": imid,
                        "InstanceInitiatedShutdownBehavior": "stop",
                        "InstanceType": "m4.xlarge",
                        "KeyName": "ssh_key_osp",
                        "Monitoring": "false",
                        "NetworkInterfaces": [
                            {
                                "AssociatePublicIpAddress": "false",
                                "Description": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-im-eth0"
                                        ]
                                    ]
                                },
                                "DeviceIndex": "0",
                                "GroupSet": [
                                    {
                                        "Ref": "UserSGforIM"
                                    }
                                ],
                                "SubnetId": {
                                    "Ref": "UserSubnet1"
                                },
                                "PrivateIpAddress": "172.30.0.14"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-im"
                                        ]
                                    ]
                                }
                            }
                        ]
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "28d30d71-fccb-4335-b829-251eba243b2b"
                        }
                    },
                    "DependsOn": [
                        "UserSGforIM",
                        "UserDB"
                    ]
                },
                "UserTGforIM": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-tg-for-im"
                                ]
                            ]
                        },
                        "Port": 9002,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserIM"
                                },
                                "Port": 9091
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "b5172306-96a7-40ae-8bff-c8fcdb2c369c"
                        }
                    },
                    "DependsOn": [
                        "UserIM"
                    ]
                },
                "UserListenerforIM": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserTGforIM"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "9002",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "499bead6-6ca1-46d9-8366-4de1782349fd"
                        }
                    }
                },
                "UserSSHTGforIM": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sshtg-for-im"
                                ]
                            ]
                        },
                        "Port": 14022,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserIM"
                                },
                                "Port": 22
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "00c66412-d9eb-41f9-b0be-5bbbc60834a8"
                        }
                    },
                    "DependsOn": [
                        "UserIM"
                    ]
                },
                "UserSSHListenerforIM": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserSSHTGforIM"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "14022",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "481fb7e3-f16a-4f76-b845-586500f53044"
                        }
                    }
                }
            };
            return imModel
        },
        OSP: function (ospid){
            let ospModel = {
                "UserSGforOSP": {
                    "Type": "AWS::EC2::SecurityGroup",
                    "Properties": {
                        "GroupName": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-osp"
                                ]
                            ]
                        },
                        "GroupDescription": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-osp"
                                ]
                            ]
                        },
                        "SecurityGroupIngress": [
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "22",
                                "ToPort": "22",
                                "CidrIp": "0.0.0.0/0"
                            },
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "6080",
                                "ToPort": "6080",
                                "CidrIp": "0.0.0.0/0"
                            },
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "7099",
                                "ToPort": "7099",
                                "CidrIp": "0.0.0.0/0"
                            },
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "8080",
                                "ToPort": "8080",
                                "CidrIp": "0.0.0.0/0"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-sg-for-osp"
                                        ]
                                    ]
                                }
                            }
                        ],
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "44725a6e-a8b4-42c1-bd26-e4bfa8389028"
                        }
                    }
                },
                "UserOSP": {
                    "Type": "AWS::EC2::Instance",
                    "Properties": {
                        "AvailabilityZone": {"Ref": "Region1a"},
                        "BlockDeviceMappings": [
                            {
                                "DeviceName": "/dev/sda1",
                                "Ebs": {
                                    "VolumeType": "gp2",
                                    "DeleteOnTermination": "true",
                                    "VolumeSize": "100"
                                }
                            }
                        ],
                        "EbsOptimized": "true",
                        "ImageId": ospid,
                        "InstanceInitiatedShutdownBehavior": "stop",
                        "InstanceType": "m4.2xlarge",
                        "KeyName": "ssh_key_osp",
                        "Monitoring": "false",
                        "NetworkInterfaces": [
                            {
                                "AssociatePublicIpAddress": "false",
                                "Description": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-osp-eth0"
                                        ]
                                    ]
                                },
                                "DeviceIndex": "0",
                                "GroupSet": [
                                    {
                                        "Ref": "UserSGforOSP"
                                    }
                                ],
                                "SubnetId": {
                                    "Ref": "UserSubnet1"
                                },
                                "PrivateIpAddress": "172.30.0.10"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-osp"
                                        ]
                                    ]
                                }
                            }
                        ]
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "b3efd07f-9093-4053-b370-023ae05d6c3e"
                        }
                    },
                    "DependsOn": [
                        "UserSGforOSP",
                        "UserDB"
                    ]
                },
                "UserTGforOSP": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-tg-for-osp"
                                ]
                            ]
                        },
                        "Port": 9005,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserOSP"
                                },
                                "Port": 8080
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "de2bf157-2b1e-416b-8c2e-769bb93f20a9"
                        }
                    },
                    "DependsOn": [
                        "UserOSP"
                    ]
                },
                "UserListenerforOSP": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserTGforOSP"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "9005",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "a19fad2d-08f4-44f0-a1ce-40fadb39b348"
                        }
                    }
                },
                "UserSSHTGforOSP": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sshtg-for-osp"
                                ]
                            ]
                        },
                        "Port": 10022,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserOSP"
                                },
                                "Port": 22
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "d1fa7456-1ae5-4b42-841e-7efdaf36aca5"
                        }
                    },
                    "DependsOn": [
                        "UserOSP"
                    ]
                },
                "UserSSHListenerforOSP": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserSSHTGforOSP"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "10022",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "41f7e2c1-fe83-4dd9-a966-b55bcae03dcc"
                        }
                    }
                }
            }
            return ospModel
        },
        WFM: function (wfmid){
            let wfmModel = {
                "UserSGforWFM": {
                    "Type": "AWS::EC2::SecurityGroup",
                    "Properties": {
                        "GroupName": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-wfm"
                                ]
                            ]
                        },
                        "GroupDescription": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sg-for-wfm"
                                ]
                            ]
                        },
                        "SecurityGroupIngress": [
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "21",
                                "ToPort": "22",
                                "CidrIp": "0.0.0.0/0"
                            },
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "8082",
                                "ToPort": "8082",
                                "CidrIp": "0.0.0.0/0"
                            },
                            {
                                "IpProtocol": "tcp",
                                "FromPort": "30000",
                                "ToPort": "30000",
                                "CidrIp": "0.0.0.0/0"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-sg-for-wfm"
                                        ]
                                    ]
                                }
                            }
                        ],
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "6fe52915-f823-4b50-a9be-ea6c3ce15ef1"
                        }
                    }
                },
                "UserWFM": {
                    "Type": "AWS::EC2::Instance",
                    "Properties": {
                        "AvailabilityZone": {"Ref": "Region1a"},
                        "BlockDeviceMappings": [
                            {
                                "DeviceName": "/dev/sda1",
                                "Ebs": {
                                    "VolumeType": "gp2",
                                    "DeleteOnTermination": "true",
                                    "VolumeSize": "100"
                                }
                            }
                        ],
                        "EbsOptimized": "true",
                        "ImageId": wfmid,
                        "InstanceInitiatedShutdownBehavior": "stop",
                        "InstanceType": "m4.xlarge",
                        "KeyName": "ssh_key_osp",
                        "Monitoring": "false",
                        "NetworkInterfaces": [
                            {
                                "AssociatePublicIpAddress": "false",
                                "Description": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-wfm-eth0"
                                        ]
                                    ]
                                },
                                "DeviceIndex": "0",
                                "GroupSet": [
                                    {
                                        "Ref": "UserSGforWFM"
                                    }
                                ],
                                "SubnetId": {
                                    "Ref": "UserSubnet1"
                                },
                                "PrivateIpAddress": "172.30.0.18"
                            }
                        ],
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": {
                                    "Fn::Join": [
                                        "",
                                        [
                                            {
                                                "Ref": "UserID"
                                            },
                                            "-sp-wfm"
                                        ]
                                    ]
                                }
                            }
                        ]
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "677763b2-49cc-4fff-99b2-ec6f716d764b"
                        }
                    },
                    "DependsOn": [
                        "UserSGforWFM",
                        "UserDB"
                    ]
                },
                "UserTGforWFM": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-tg-for-wfm"
                                ]
                            ]
                        },
                        "Port": 9004,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserWFM"
                                },
                                "Port": 8082
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "b6afb9d3-5868-4f50-932a-3aa75cf7fa00"
                        }
                    },
                    "DependsOn": [
                        "UserWFM"
                    ]
                },
                "UserListenerforWFM": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserTGforWFM"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "9004",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "11296b0e-803a-4d03-96b8-2e12f5fbc16d"
                        }
                    }
                },
                "UserSSHTGforWFM": {
                    "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
                    "Properties": {
                        "Name": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Ref": "UserID"
                                    },
                                    "-sp-sshtg-for-wfm"
                                ]
                            ]
                        },
                        "Port": 18022,
                        "Protocol": "TCP",
                        "Targets": [
                            {
                                "Id": {
                                    "Ref": "UserWFM"
                                },
                                "Port": 22
                            }
                        ],
                        "TargetType": "instance",
                        "VpcId": {
                            "Ref": "UserVPC"
                        }
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "e114dabd-f88d-4d42-952a-4ad9d84fde08"
                        }
                    },
                    "DependsOn": [
                        "UserWFM"
                    ]
                },
                "UserSSHListenerforWFM": {
                    "Type": "AWS::ElasticLoadBalancingV2::Listener",
                    "Properties": {
                        "DefaultActions": [
                            {
                                "Type": "forward",
                                "TargetGroupArn": {
                                    "Ref": "UserSSHTGforWFM"
                                }
                            }
                        ],
                        "LoadBalancerArn": {
                            "Ref": "UserELB"
                        },
                        "Port": "18022",
                        "Protocol": "TCP"
                    },
                    "Metadata": {
                        "AWS::CloudFormation::Designer": {
                            "id": "c48a9af1-95bb-4ae9-88da-56095a284d63"
                        }
                    }
                }
            };
            return wfmModel
        }
    };
    return modelimport
};
