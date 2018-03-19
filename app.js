// Ext.application({
// 			requires : ['Ext.container.Viewport'],
// 			name : 'MyDesktop',
// 			appFolder : 'app',
// 			controllers: ['Students'],
// 			launch : function() {
// 				console.log("launch triggered!");
// 				Ext.create('Ext.container.Viewport', {
//                     width:860,
//                     height:600,
//                     animCollapse:false,
//                     constrainHeader:true,
//                     defaults:{margins:'5 5 5 5'},
// 							layout : 'fit',
// 							items : [{
// 										xtype : 'studentlist'
//
// 									}]
// 						});
// 			}
// 		});


//scene
Ext.application({
    requires : ['Ext.container.Viewport'],
    name : 'MyDesktop',
    appFolder : 'scene',
    controllers: ['SceneController'],
    launch : function() {
        console.log("launch triggered!");
        Ext.create('Ext.container.Viewport', {
            width:860,
            height:600,
            animCollapse:false,
            constrainHeader:true,
            defaults:{margins:'5 5 5 5'},
            layout : 'fit',
            items : [{
                xtype : 'scenelist'

            }]
        });
    }
});