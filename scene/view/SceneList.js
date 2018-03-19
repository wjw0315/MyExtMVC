Ext.define('MyDesktop.view.SceneList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.scenelist',
    store: 'SceneData',
    title : '场景列表',
    initComponent: function() {


        this.columns = [
            {header: '编号',  dataIndex: 'id',  flex: 1},
            {header: '姓名',  dataIndex: 'name',  flex: 1},
            {header: '年龄', dataIndex: 'age', flex: 1},
            {header: '性别', dataIndex: 'sex', flex: 1}
        ];
        this.callParent(arguments);
    }
});