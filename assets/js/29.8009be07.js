(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{559:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),t("p",[s._v("参考文章：")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.im/post/6869519303864123399#heading-9",target:"_blank",rel:"noopener noreferrer"}},[s._v("【「一劳永逸」一张脑图带你掌握Git命令】--TianTianUp"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.im/post/6844903635533594632",target:"_blank",rel:"noopener noreferrer"}},[s._v("【您必须知道的 Git 分支开发规范】 - 稻草叔叔"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"git-命令脑图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-命令脑图"}},[s._v("#")]),s._v(" git 命令脑图")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/kaimo313/article/details/108584389",target:"_blank",rel:"noopener noreferrer"}},[s._v("git 命令脑图链接"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200917184011887.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("基于上面的图，我们就有接下来一些概念")]),s._v(" "),t("h3",{attrs:{id:"版本库-git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本库-git"}},[s._v("#")]),s._v(" 版本库 "),t("code",[s._v(".git")])]),s._v(" "),t("ul",[t("li",[s._v("当我们使用git管理文件时，比如 "),t("code",[s._v("git init")]),s._v(" 时，这个时候，会多一个 "),t("code",[s._v(".git")]),s._v(" 文件，我们把这个文件称之为版本库。")]),s._v(" "),t("li",[t("code",[s._v(".git")]),s._v(" 文件另外一个作用就是它在创建的时候，会自动创建 master 分支，并且将 HEAD 指针指向 master 分支。")])]),s._v(" "),t("h3",{attrs:{id:"工作区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作区"}},[s._v("#")]),s._v(" 工作区")]),s._v(" "),t("ul",[t("li",[s._v("本地项目存放文件的位置")]),s._v(" "),t("li",[s._v("可以理解成图上的 workspace")])]),s._v(" "),t("h3",{attrs:{id:"暂存区-index-stage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暂存区-index-stage"}},[s._v("#")]),s._v(" 暂存区 (Index/Stage)")]),s._v(" "),t("ul",[t("li",[s._v("顾名思义就是暂时存放文件的地方，通过是通过 add 命令将工作区的文件添加到缓冲区")])]),s._v(" "),t("h3",{attrs:{id:"本地仓库-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库-repository"}},[s._v("#")]),s._v(" 本地仓库（Repository）")]),s._v(" "),t("ul",[t("li",[s._v("通常情况下，我们使用 commit 命令可以将暂存区的文件添加到本地仓库")]),s._v(" "),t("li",[s._v("通常而言，HEAD 指针指向的就是 master 分支")])]),s._v(" "),t("h3",{attrs:{id:"远程仓库-remote"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库-remote"}},[s._v("#")]),s._v(" 远程仓库（Remote）")]),s._v(" "),t("ul",[t("li",[s._v("举个例子，当我们使用 GitHub 托管我们项目时，它就是一个远程仓库。")]),s._v(" "),t("li",[s._v("通常我们使用 clone 命令将远程仓库代码拷贝下来，本地代码更新后，通过 push 托送给远程仓库。")])]),s._v(" "),t("h2",{attrs:{id:"git文件状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git文件状态"}},[s._v("#")]),s._v(" Git文件状态")]),s._v(" "),t("p",[s._v("通常我们需要查看一个文件的状态")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("Changes not staged for commit")])]),s._v(" "),t("blockquote",[t("p",[s._v("表示得大概就是工作区有该内容，但是缓存区没有，需要我们 git add")])]),s._v(" "),t("p",[t("code",[s._v("Changes to be committed")])]),s._v(" "),t("blockquote",[t("p",[s._v("一般而言，这个时候，文件放在缓存区了，我们需要git commit")])]),s._v(" "),t("p",[t("code",[s._v("nothing to commit, working tree clean")])]),s._v(" "),t("blockquote",[t("p",[s._v("这个时候，我们将本地的代码推送到远端即可")])]),s._v(" "),t("h2",{attrs:{id:"常见命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见命令"}},[s._v("#")]),s._v(" 常见命令")]),s._v(" "),t("h3",{attrs:{id:"git-配置命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-配置命令"}},[s._v("#")]),s._v(" git 配置命令")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200917184033946.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("列出当前配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list   \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("列出 Repository 配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local --list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("列出系统配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system --list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通过上述的命令，发现你并没有配置用户信息的话，接下来配置一下")]),s._v(" "),t("p",[s._v("配置用户名")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your name"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("配置用户邮箱")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"youremail@github.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"分支管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[s._v("#")]),s._v(" 分支管理")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200917184048506.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("查看本地分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看远程分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -r\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看本地和远程分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("从当前分支，切换到其他分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n// 举个例子\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout feature/tiantian\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("创建并切换到新建分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n// 举个例子\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b feature/tiantian\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("删除分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n// 举个例子\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d feature/tiantian\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("当前分支与指定分支合并")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n// 举个例子\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge feature/tiantian\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("查看哪些分支已经合并到当前分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --merged\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看哪些分支没有合并到当前分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --no-merged\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看各个分支最后一个提交对象的信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("删除远程分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("重命名分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("oldbranch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("newbranch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("拉取远程分支并创建本地分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b 本地分支名x origin/远程分支名x\n\n// 另外一种方式,也可以完成这个操作。\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local-branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n// fetch这个指令的话,后续会梳理\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"fetch-指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch-指令"}},[s._v("#")]),s._v(" fetch 指令")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200917184107262.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[t("strong",[s._v("fetch推荐写法")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local-branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("一般而言，这个 origin 是远程主机名，一般默认就是 origin。")]),s._v(" "),t("li",[t("code",[s._v("branch-name")]),s._v(" 你要拉取的分支")]),s._v(" "),t("li",[t("code",[s._v("local-branch-name")]),s._v(" 通常而言，就是你本地新建一个新分支，将 origin 下的某个分支代码下载到本地分支。")])]),s._v(" "),t("p",[s._v("举个例子")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin feature/template_excellent:feature/template_layout\n// 你的工作目录下，就会有feature/template_layout\n// 一般情况下,我们需要做的就是在这个分支上开发新需求\n// 完成代码后,我们需要做的就是上传我们的分支\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("strong",[s._v("fetch其他写法")])]),s._v(" "),t("p",[s._v("将某个远程主机的更新，全部取回本地。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程主机名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样子的话，取回的是所有的分支更新，如果想取回特定分支，可以指定分支名")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程主机名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当你想将某个分支的内容取回到本地下某个分支的话，如下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin :"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local-branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n// 等价于\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin master:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local-branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"花式撤销"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#花式撤销"}},[s._v("#")]),s._v(" 花式撤销")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020091718412239.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("撤销工作区修改")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout --\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("暂存区文件撤销 (不覆盖工作区)")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("版本回退")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("soft "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mixed "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" hard "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" HEAD ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[s._v("指令")]),s._v(" "),t("th",[s._v("作用范围")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("--hard")]),s._v(" "),t("td",[s._v("回退全部，包括HEAD，index，working tree")])]),s._v(" "),t("tr",[t("td",[s._v("--mixed")]),s._v(" "),t("td",[s._v("回退部分,包括HEAD，index")])]),s._v(" "),t("tr",[t("td",[s._v("--soft")]),s._v(" "),t("td",[s._v("只回退HEAD")])])])]),s._v(" "),t("h3",{attrs:{id:"状态查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态查询"}},[s._v("#")]),s._v(" 状态查询")]),s._v(" "),t("p",[s._v("展示Git命令大纲")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git help (--help)")])])]),s._v(" "),t("p",[s._v("展示Git命令大纲全部列表")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git help -a")])])]),s._v(" "),t("p",[s._v("展示具体命令说明手册")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git help")])])]),s._v(" "),t("h3",{attrs:{id:"文件暂存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件暂存"}},[s._v("#")]),s._v(" 文件暂存")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020091718414032.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("添加改动到 stash")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git stash save -a “message”")])])]),s._v(" "),t("p",[s._v("删除暂存")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git stash drop stash@{ID}")])])]),s._v(" "),t("p",[s._v("删除全部缓存")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git stash clear")])])]),s._v(" "),t("p",[s._v("恢复改动")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git stash pop stash@{ID}")])])]),s._v(" "),t("h3",{attrs:{id:"差异比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#差异比较"}},[s._v("#")]),s._v(" 差异比较")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200917184156160.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("比较工作区与缓存区")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git diff")])])]),s._v(" "),t("p",[s._v("比较缓存区与本地库最近一次commit内容")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git diff -- cached")])])]),s._v(" "),t("p",[s._v("比较工作区与本地最近一次commit内容")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git diff HEAD")])])]),s._v(" "),t("p",[s._v("比较两个commit之间差异")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("git diff <commit ID> <commit ID>")])])]),s._v(" "),t("h2",{attrs:{id:"分支命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支命名"}},[s._v("#")]),s._v(" 分支命名")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200917184215675.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"master-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#master-分支"}},[s._v("#")]),s._v(" master 分支")]),s._v(" "),t("p",[s._v("1、主分支，用于部署生产环境的分支，确保稳定性。")]),s._v(" "),t("p",[s._v("2、master 分支一般由 develop 以及 hotfix 分支合并，任何情况下都不能直接修改代码。")]),s._v(" "),t("h3",{attrs:{id:"develop-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#develop-分支"}},[s._v("#")]),s._v(" develop 分支")]),s._v(" "),t("p",[s._v("1、develop 为开发分支，通常情况下，保存最新完成以及 bug 修复后的代码。")]),s._v(" "),t("p",[s._v("2、开发新功能时，feature 分支都是基于 develop 分支下创建的。")]),s._v(" "),t("h3",{attrs:{id:"feature-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feature-分支"}},[s._v("#")]),s._v(" feature 分支")]),s._v(" "),t("p",[s._v("1、开发新功能，基本上以 develop 为基础创建 feature 分支。")]),s._v(" "),t("p",[s._v("2、分支命名："),t("code",[s._v("feature/")]),s._v(" 开头的为特性分支， 命名规则: "),t("code",[s._v("feature/user_module")]),s._v("、 "),t("code",[s._v("feature/cart_module")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"release-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-分支"}},[s._v("#")]),s._v(" release 分支")]),s._v(" "),t("p",[s._v("1、release 为预上线分支，发布提测阶段，会 release 分支代码为基准提测。")]),s._v(" "),t("h3",{attrs:{id:"hotfix-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hotfix-分支"}},[s._v("#")]),s._v(" hotfix 分支")]),s._v(" "),t("p",[s._v("1、分支命名："),t("code",[s._v("hotfix/")]),s._v(" 开头的为修复分支，它的命名规则与 feature 分支类似。")]),s._v(" "),t("p",[s._v("2、线上出现紧急问题时，需要及时修复，以 master 分支为基线，创建 hotfix 分支，修复完成后，需要合并到 master 分支和 develop 分支。")]),s._v(" "),t("h2",{attrs:{id:"基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),t("p",[s._v("有了上述的基本了解后，那么我们就来看看整体的一个流程吧。")]),s._v(" "),t("ul",[t("li",[s._v("创建本地仓库 git init")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("链接本地仓库与远端仓库")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin\n\norigin 默认是远端仓库别名 url 可以是可以使用 https 或者 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" 的方式新建\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("检查配置信息")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("Git user name 与email")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yourname"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("生成SSH密钥")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这里换上你的邮箱"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh 里面有一个文件名为 id_rsa.pub,把里面的内容复制到 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" 库的我的 SSHKEYs 中\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("常看远端仓库信息")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("远端仓库重新命名")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" old new\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("提交到缓存区")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" 全部上传到缓存区\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 指定文件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("提交到本地仓库")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'some message'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("提交远程仓库")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程主机名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("本地分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("查看分支")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("创建新分支")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("切换分支")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"忽略文件-gitignore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件-gitignore"}},[s._v("#")]),s._v(" 忽略文件 .gitignore")]),s._v(" "),t("p",[s._v("这个文件的作用，会去忽略一些不需要纳入 Git 管理这种，我们也不希望出现在未跟踪文件列表。")]),s._v(" "),t("p",[s._v("那么我们来看看如何配置该文件信息。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此行为注释 会被Git忽略")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略 node_modules/ 目录下所有的文件")]),s._v("\nnode_modules\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略所有.vscode结尾的文件")]),s._v("\n.vscode\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略所有.md结尾的文件")]),s._v("\n*.md\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但README.md 除外")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("README.md\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会忽略 doc/something.txt 但不会忽略doc/images/arch.txt")]),s._v("\ndoc/*.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略 doc/ 目录下所有扩展名为txt文件")]),s._v("\n\ndoc/**/*.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);