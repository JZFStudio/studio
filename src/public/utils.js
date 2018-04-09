import marked from 'marked'
export default {
    markdown: function (str) {
        let content = marked(str);
        //超链接设置为新标签页
        content = content.replace(/<a /g, function (item) {
            return item + 'target="_blank" ';
        });
        //h和p标签尾部追加换行
        content = content.replace(/<h[2-6] /g, function (item) {
            return '<br/>' + item;
        });
        return content;
    }
}