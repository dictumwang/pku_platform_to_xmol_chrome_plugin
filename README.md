# pku_platform_to_xmol_chrome_plugin
Conveniently import reagent data from reagent.pku.edu.cn into x-mol database.

使用说明：
1. 下载crx文件，并解压。下载地址：https://github.com/dictumwang/pku_platform_to_xmol_chrome_plugin/releases/download/crx/pku_platform_to_xmol_chrome_plugin.crx
2. 打开chrome扩展管理，开启开发者模式，加载已解压的扩展，选择解压的位置
3. 加载扩展程序完成后，进入试剂管理平台，进入“全部订单”页面，右面多了“入库”按钮。如果没有的话，刷新一下就会出现。
4. 点击“入库”，或者进入试剂的详细信息页面也会有“一键入库”按钮
注意：进行“入库”操作前请确保已经登录x-mol并能够进入库存管理页面
5. 点击后会跳转到添加试剂的页面，并且刚刚选择的试剂的信息已经全部自动填充，只需输入库存位置即可。
6. 添加成功后，页面还会回到刚刚的页面，此时无需理会直接关闭xmol即可。

目前已知的BUG：
1. “全部订单”页面需要刷新一下才能显示入库按钮
2. 商品详情页面的“一键入库”按钮不一定总能出现
3. “全部订单”页面的入库按钮只有第一页有效，后面的页面全部链接到了第一页的订单
