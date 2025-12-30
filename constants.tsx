
import { TimelineSection } from './types.ts';

export const TIMELINE_DATA: TimelineSection[] = [
  {
    id: 'pre-eve',
    timeLabel: '春晚前',
    description: '筹备阶段：春节写真与氛围感图生图玩法。',
    layout: 'special-pre-eve',
    items: [
      { id: 'p1', title: '新春写真 (马年限定)', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/c880f894603941ce91b71652569eaa34~tplv-r8ubuxgbfe-image.png' },
      { id: 'p2-raw', title: '穿搭推荐 (原图)', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/f73291e766d84c68a33a124d49c855f0~tplv-r8ubuxgbfe-image.png', subTitle: 'ORIGINAL' },
      { id: 'p2-res', title: '穿搭推荐 (效果)', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/84cbf6e8ce724c03bfb4eb1babe81658~tplv-r8ubuxgbfe-image.png', subTitle: 'RESULT', badge: '图生图' },
      { id: 'p3-base', title: '基础底图', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/47fa576efd4f4c269bc797725fa87f09~tplv-r8ubuxgbfe-image.png', subTitle: 'BASE' },
      { id: 'p3-fire', title: '增加烟花', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/fac1159b4fe943bc82adfbe1b7ae6ea3~tplv-r8ubuxgbfe-image.png', subTitle: 'FIREWORKS', badge: '图生图' },
      { id: 'p3-lantern', title: '增加灯笼', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/09c352fad6224c93be9e5e907099a4a9~tplv-r8ubuxgbfe-image.png', subTitle: 'LANTERNS', badge: '图生图' },
    ]
  },
  {
    id: 'eve-pre-gala',
    timeLabel: '除夕 (白昼)',
    description: '春晚预热：拜年贺卡与年夜饭氛围。',
    items: [
      { id: 'e1', title: '拜年贺卡', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/bd14e9c55f6f4f9c8f8c7e5cb4178fb3~tplv-r8ubuxgbfe-image.png' },
      { id: 'e2', title: '马年贺图', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/a9236630d8e6493b846ebaf085e01207~tplv-r8ubuxgbfe-image.png' },
      { id: 'e3', title: '新春Plog', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/7aa7dfb2514d44a4a5a6827c9f2f1fef~tplv-r8ubuxgbfe-image.png' },
      { id: 'e4', title: '舌尖上的中国', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/817dbd1919a343f9a8047dcb2952a5b4~tplv-r8ubuxgbfe-image.png', badge: '视频2.0' },
    ]
  },
  {
    id: 'eve-gala',
    timeLabel: '除夕 (春晚)',
    description: '春晚互动：承接春晚热度，红包雨主场。',
    items: [
      { id: 'g1', title: '红包雨', type: 'video', imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/30eh7uhpxvbn/hongbao.mp4', badge: '视频' },
      { id: 'g4', title: '拜年贺卡', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/bd14e9c55f6f4f9c8f8c7e5cb4178fb3~tplv-r8ubuxgbfe-image.png', badge: '互动', subTitle: 'GALA GREETING' },
      { id: 'g2', title: '新春头像', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/34f2064abfb94293ac1c2fba6688b3db~tplv-r8ubuxgbfe-image.png' },
      { id: 'g3', title: '新春Plog', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/0e8cd91bb49a4931bfc85cb4913b33a2~tplv-r8ubuxgbfe-image.png' },
    ]
  },
  {
    id: 'day-1',
    timeLabel: '大年初一',
    description: '拜年高峰：主推视频玩法，社交合影优先。',
    items: [
      { id: 'd1_5', title: '金币爆炸', type: 'video', imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/30eh7uhpxvbn/jinbibaozha.mp4', badge: '视频', subTitle: 'COIN EXPLOSION' },
      { id: 'd1_6', title: '新春写真', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/c880f894603941ce91b71652569eaa34~tplv-r8ubuxgbfe-image.png', badge: 'AI写真', subTitle: 'PORTRAIT 2025' },
      { id: 'd1_2', title: '烟花拜年', type: 'video', imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/30eh7uhpxvbn/12月30日.mp4', badge: '视频' },
      { id: 'd1_3', title: '鱼眼拜年', type: 'video', imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/30eh7uhpxvbn/v02455g10004d55ltvnog65stq9p7gdg (1).mp4', badge: '视频' },
      { id: 'd1_1', title: '拜年表情包', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/1187abe0df2b4f1a9f2cb0afb1b017da~tplv-r8ubuxgbfe-image.png' },
      { id: 'd1_4', title: '红包雨', type: 'video', imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/30eh7uhpxvbn/hongbao.mp4', badge: '视频' },
    ]
  },
  {
    id: 'day-2-4',
    timeLabel: '大年初二 - 初四',
    description: '走亲访友与合家欢连续性：主打社交互动与传统文化符号。',
    items: [
      { id: 'd2_1', title: '全家福合影', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/eec365997b8e49a29d0e817911a71551~tplv-r8ubuxgbfe-image.png' },
      { id: 'd2_2', title: '新春写真', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/9a5c54cd017b4e498bedf1caaae48c2d~tplv-r8ubuxgbfe-image.png' },
      { id: 'd2_3', title: '新年上上签', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/e053f939221247cab81a4751d011fc8e~tplv-r8ubuxgbfe-image.png', badge: '互动' },
      { id: 'd2_4', title: '灶神壁纸', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/17a72286e88d48e1a201cd4d02a77d61~tplv-r8ubuxgbfe-image.png' },
      { id: 'd2_5', title: '新春头像', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/34f2064abfb94293ac1c2fba6688b3db~tplv-r8ubuxgbfe-image.png', badge: '限定' },
    ]
  },
  {
    id: 'day-5',
    timeLabel: '大年初五',
    description: '财神节：迎财神、和财神爷合影，更有 AI 变身财神玩法。',
    items: [
      { id: 'd5_1', title: '财神爷壁纸', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/aa149d654fa249c3af73f6b004d8eb41~tplv-r8ubuxgbfe-image.png' },
      { id: 'd5_2', title: '和财神爷合影', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/050e77cd300648cd909a3b57809ceb43~tplv-r8ubuxgbfe-image.png' },
      { id: 'd5_3', title: '开门迎财神', type: 'video', imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/30eh7uhpxvbn/caishen.mp4', badge: '视频' },
      { id: 'd5_4', title: 'cosplay财神爷', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/dd33f8d2515f4cf78649e6b5210d8645~tplv-r8ubuxgbfe-image.png' },
    ]
  },
  {
    id: 'day-6',
    timeLabel: '大年初六',
    description: '承接年后情绪：打工人复工，社交话题转向开工大吉。',
    items: [
      { id: 'd6_1', title: '复工表情包', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/9ec02f5b9eda4f1bb97fc567b2240819~tplv-r8ubuxgbfe-image.png' },
      { id: 'd6_2', title: '新春Plog', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/7aa7dfb2514d44a4a5a6827c9f2f1fef~tplv-r8ubuxgbfe-image.png' },
      { id: 'd6_3', title: '新春写真', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/6be20acb0a2042ee914686301b8a3ae0~tplv-r8ubuxgbfe-image.png' },
      { id: 'd6_4', title: '复工头像', imageUrl: 'https://p9-butterfly.byteimg.com/tos-cn-i-r8ubuxgbfe/bc5cac10d09d45ae9b89334287ea3089~tplv-r8ubuxgbfe-image.png' },
    ]
  }
];
