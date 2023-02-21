function themechange() {
    var lightBg = '#E5C687';
    var lightText = '#121619';
    let theme = document.getElementById('container').getAttribute('theme');
    if (theme == 'dark'){
        document.getElementById('container').setAttribute('theme', 'light');
        document.getElementById('title').setAttribute('theme', 'light');
        document.getElementById('input1').setAttribute('theme', 'light');
        document.getElementById('input2').setAttribute('theme', 'light');
        document.getElementById('submitbtn').setAttribute('theme', 'light');
        document.getElementById('themebtn').setAttribute('theme', 'light');
    }else
    {
        document.getElementById('container').setAttribute('theme', 'dark');
        document.getElementById('title').setAttribute('theme', 'dark');
        document.getElementById('input1').setAttribute('theme', 'dark');
        document.getElementById('input2').setAttribute('theme', 'dark');
        document.getElementById('submitbtn').setAttribute('theme', 'dark');
        document.getElementById('themebtn').setAttribute('theme', 'dark');
    }
    
  }