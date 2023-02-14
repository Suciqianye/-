import plugin from '../../lib/plugins/plugin.js';
import puppeteer from '../..//lib/puppeteer/puppeteer.js';
import fs from 'fs';
import axios from 'axios';
import {
    createRequire
}
from 'module'
const require = createRequire(
    import.meta.url)
var http = require('http');
let FormData = require('form-data');
export class example extends plugin {
    constructor() {
        super({
            name: '识别动漫角色',
            event: 'message',
            priority: 5000,
            rule: [

                {
                    reg: '^#日漫识别$',
                    fnc: 'rm',
                    log: false

                },
                {
                   reg: '^#游戏识别$',
                   fnc: 'yx',
                   log: false
                }
            ]

        })
    }
    async rm(e) {
        let ml = process.cwd()
        e.reply('好的，我开始识别了')
        let tp = e.img[0].replace(/https/g, "http").trim()
        console.log(tp)
        let sj = await imgUrlToBase64(tp)
        sj = sj.base64Img
        await fs.writeFile('./6.png', sj.toString(), 'base64', (err) => {
            if (err) {
                console.log('识别失败')
            } else {
                console.log('识别成功')
            }
        })
        await sleep(2000)
        let shuju
        shuju = fs.readFileSync(ml + '/6.png')
            //console.log(shuju)
        const buffer4 = await Buffer.from(sj, 'binary');
        //shuju= buffer4.toString('base64')
        let param = new FormData();
        param.append('image', shuju, '0.png');
        console.log(buffer4)
        var len = await new Promise((resolve, reject) => {
            return param.getLength((err, length) => (err ? reject(err) : resolve(length)))
        })
        console.log(len)
        axios({
                method: 'post',
                url: 'https://aiapiv2.animedb.cn/ai/api/detect?force_one=1',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Content-Length': len,
                },
                data: param
            })
            .then(async function(response) {
                console.log(response.data.data[0].char);
                let res = response.data.data
                let msg2 = []
                let name = ""
                let ly = ""
                for (let i = 0; i < res.length; i++) {
                    name = res[i].char[0].name
                    ly = res[i].char[0].cartoonname
                    msg2 = msg2 + '┌动漫:' + ly + "\n" + '└人物:' + name + "\n"
                }
                let shuse = "本次共识别到[" + res.length + "]位人物\n"
                let fasong = shuse + msg2 + "本次识别已完成!"
                e.reply(fasong, true)
            })
            .catch(function(error) {
                console.log(error);
            });
    }
async yx(e) {
        let ml = process.cwd()
        e.reply('好的，我开始识别了')
        let tp = e.img[0].replace(/https/g, "http").trim()
        console.log(tp)
        let sj = await imgUrlToBase64(tp)
        sj = sj.base64Img
        await fs.writeFile('./6.png', sj.toString(), 'base64', (err) => {
            if (err) {
                console.log('识别失败')
            } else {
                console.log('识别成功')
            }
        })
        await sleep(2000)
        let shuju
        shuju = fs.readFileSync(ml + '/6.png')
            //console.log(shuju)
        const buffer4 = await Buffer.from(sj, 'binary');
        //shuju= buffer4.toString('base64')
        let param = new FormData();
        param.append('image', shuju, '0.png');
        console.log(buffer4)
        var len = await new Promise((resolve, reject) => {
            return param.getLength((err, length) => (err ? reject(err) : resolve(length)))
        })
        console.log(len)
        axios({
                method: 'post',
                url: 'https://aiapiv2.animedb.cn/ai/api/detect?force_one=1&model=game',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Content-Length': len,
                },
                data: param
            })
            .then(async function(response) {
                console.log(response.data.data[0].char);
                let res = response.data.data
                let msg2 = []
                let name = ""
                let ly = ""
                for (let i = 0; i < res.length; i++) {
                    name = res[i].char[0].name
                    ly = res[i].char[0].cartoonname
                    msg2 = msg2 + '┌游戏:' + ly + "\n" + '└人物:' + name + "\n"
                }
                let shuse = "本次共识别到[" + res.length + "]位人物\n"
                let fasong = shuse + msg2 + "本次识别已完成!"
                e.reply(fasong, true)
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}
async function imgUrlToBase64(url) {
    let base64Img
    return new Promise(function(resolve, reject) {
        let req = http.get(url, function(res) {
            var chunks = [];
            var size = 0;
            res.on('data', function(chunk) {
                chunks.push(chunk);
                size += chunk.length;
                //累加缓冲数据的长度
            });
            res.on('end', function(err) {
                var data = Buffer.concat(chunks, size);
                base64Img = data.toString('base64');
                resolve({
                    success: true,
                    base64Img
                });
            });
        })
        req.on('error', (e) => {
            resolve({
                success: false,
                errmsg: e.message
            });
        });
        req.end();
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}