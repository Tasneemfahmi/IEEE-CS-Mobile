function naughtyOrNice(data) {
    var naughty = 0;
    var nice = 0;
    for (var month in data) {
        for (var day in data[month]) {
            var behavior = data[month][day];
            if (behavior === 'Naughty')
                naughty++;
            else if (behavior === 'Nice')
                nice++;
        }
    }
    if (nice>=naughty){
        return "Nice!";
    } else {
        return "Naughty!"
    }
}