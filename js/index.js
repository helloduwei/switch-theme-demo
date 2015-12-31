// localStorage.siteTheme = '';
var themeDefault = '',
		warm = 'css/theme1.min.css',
		cool = 'css/theme2.min.css';

var linkTags = document.getElementsByTagName('link'),themeTag;

for (var i = 0; i < linkTags.length; i++) {
	if(linkTags[i].getAttribute('role') == 'theme'){themeTag = linkTags[i]}
};

function switchTheme(theme,obj){
	event.preventDefault();
	localStorage.siteTheme = theme;
	themeTag.setAttribute('href',localStorage.siteTheme);
	console.log(localStorage.siteTheme);
}

(function(){
	themeTag.setAttribute('href',localStorage.siteTheme?localStorage.siteTheme:'');
})()