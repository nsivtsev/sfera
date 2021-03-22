import React from "react";
import ObjectsList from "./ObjectsList";


export default function AgentIndex() {
    const objects = [{
        "id": 2,
        "name": "Церковь Иконы Божьей Матери Всех Скорбящих Радости",
        "description": "Санкт-Петербург, Невский р-н, пр. Обуховской Обороны, д. 22",
        "image": {"src": "/storage/2/2020/9/405gzqpkff7pe5a_src.jpg", "tmb": "/storage/2/2020/9/405gzqpkff7pe5a_tmb.jpg"},
        "lines": [{
            "id": 2,
            "name": "Территория церкви",
            "description": "Съемки на местности",
            "image": {
                "src": "/storage/2/2020/9/405gzqjkemqezko_src.jpg",
                "tmb": "/storage/2/2020/9/405gzqjkemqezko_tmb.jpg"
            },
            "orderWeight": 9
        }, {
            "id": 3,
            "name": "Помещения церкви",
            "description": "Съемки в помещениях",
            "image": {
                "src": "/storage/2/2020/9/405gzqjken0nfb8_src.jpg",
                "tmb": "/storage/2/2020/9/405gzqjken0nfb8_tmb.jpg"
            },
            "orderWeight": 7
        }, {
            "id": 12,
            "name": "Церковно-причтовый дом",
            "description": "Съемка в помещении",
            "image": {
                "src": "/storage/2/2020/9/405gzqpkf5b6tlk_src.jpg",
                "tmb": "/storage/2/2020/9/405gzqpkf5b6tlk_tmb.jpg"
            },
            "orderWeight": 2
        }]
    }, {
        "id": 15,
        "name": "Строительство",
        "description": "Строительство Школы и Детского сада",
        "image": {
            "src": "/storage/15/2020/10/405gzqdlkfxsz5xl_src.jpg",
            "tmb": "/storage/15/2020/10/405gzqdlkfxsz5xl_tmb.jpg"
        },
        "lines": [{
            "id": 15,
            "name": "Строительство школы и детского сада",
            "description": "Съемка строительства",
            "image": {
                "src": "/storage/15/2020/10/405gzqiskfxth4ez_src.jpg",
                "tmb": "/storage/15/2020/10/405gzqiskfxth4ez_tmb.jpg"
            },
            "orderWeight": 1
        }]
    }, {
        "id": 6,
        "name": "Малое Карлино",
        "description": "Строительство Школы и Детского сада",
        "image": {"src": "/storage/6/2020/9/405gzqikfnp7cbn_src.jpg", "tmb": "/storage/6/2020/9/405gzqikfnp7cbn_tmb.jpg"},
        "lines": [{
            "id": 13,
            "name": "Строительство школы и детского сада",
            "description": "Пос. Малое Карлино",
            "image": {
                "src": "/storage/6/2020/9/405gzqikfnp88b6_src.jpg",
                "tmb": "/storage/6/2020/9/405gzqikfnp88b6_tmb.jpg"
            },
            "orderWeight": 1
        }]
    }, {
        "id": 3,
        "name": "Церковь Пресвятой Троицы ",
        "description": "«Киновия Александро-Невской лавры»  г.Санкт-Петербург, Октябрьская набережная, д.18, лит.А»,",
        "image": {"src": "/storage/3/2020/9/405gzqpkff7gksj_src.jpg", "tmb": "/storage/3/2020/9/405gzqpkff7gksj_tmb.jpg"},
        "lines": [{
            "id": 4,
            "name": "Территория Киновии",
            "description": "Съемки на улице",
            "image": {
                "src": "/storage/3/2020/9/405gzqjken04nfp_src.jpg",
                "tmb": "/storage/3/2020/9/405gzqjken04nfp_tmb.jpg"
            },
            "orderWeight": 9
        }, {
            "id": 5,
            "name": "Храм",
            "description": "Съемки в помещении",
            "image": {
                "src": "/storage/3/2020/9/405gzqjkemzfymp_src.jpg",
                "tmb": "/storage/3/2020/9/405gzqjkemzfymp_tmb.jpg"
            },
            "orderWeight": 7
        }, {
            "id": 9,
            "name": "Отпевальня",
            "description": "Съемки в помещении",
            "image": {
                "src": "/storage/3/2020/9/405gzqjkemzt9u6_src.jpg",
                "tmb": "/storage/3/2020/9/405gzqjkemzt9u6_tmb.jpg"
            },
            "orderWeight": 3
        }, {
            "id": 10,
            "name": "Церковно-причтовый дом",
            "description": "Съемка в помещении",
            "image": {
                "src": "/storage/3/2020/9/405gzqjkemzut71_src.jpg",
                "tmb": "/storage/3/2020/9/405gzqjkemzut71_tmb.jpg"
            },
            "orderWeight": 3
        }]
    }, {
        "id": 16,
        "name": "Реконструкция",
        "description": "Реконструкция бизнес-инкубатора",
        "image": {
            "src": "/storage/16/2020/10/405gzqdlkfxsz5y7_src.jpg",
            "tmb": "/storage/16/2020/10/405gzqdlkfxsz5y7_tmb.jpg"
        },
        "lines": [{
            "id": 16,
            "name": "Реконструкция бизнес-инкубатора",
            "description": "Съемка реконструкции",
            "image": {
                "src": "/storage/16/2020/10/405gzqiskfxth4fu_src.jpg",
                "tmb": "/storage/16/2020/10/405gzqiskfxth4fu_tmb.jpg"
            },
            "orderWeight": 1
        }]
    }, {
        "id": 7,
        "name": "Тайцы",
        "description": "Реконструкция бизнес-инкубатора",
        "image": {"src": "/storage/7/2020/9/405gzqikfnp7kkf_src.jpg", "tmb": "/storage/7/2020/9/405gzqikfnp7kkf_tmb.jpg"},
        "lines": [{
            "id": 14,
            "name": "Реконструкция бизнес-инкубатора",
            "description": "Пос. Тайцы",
            "image": {
                "src": "/storage/7/2020/9/405gzqikfnp9cis_src.jpg",
                "tmb": "/storage/7/2020/9/405gzqikfnp9cis_tmb.jpg"
            },
            "orderWeight": 1
        }]
    }];

    return (
        <div>
            {objects.map((object) => {
                return <ObjectsList object={object} />
            })}
        </div>
    );
}
