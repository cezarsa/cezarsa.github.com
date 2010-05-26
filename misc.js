function gmail(el, name) {
  name += '@';
  var link = $("<a href=''></a>");
  name += 'gmail';
  // foo bar
  name += '.';
  name += 'com';
  link.attr('href', 'm' + 'a' + 'i' + 'l' + 'to:' + name);
  link.text(name);
  $(el).html(link);
} 
