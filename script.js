var html_template = "<!doctype html>"
html_template = html_template + "<html><head><link rel='stylesheet' href='styles.css'/><\/head><body><div class='play-arrow' id='playArrow'>"
html_template = html_template + "</div><button onclick='play()'>Play<\/button>"
html_template = html_template + "<script> @@@PLAY_CODE <\/script>"
html_template = html_template + "<\/body><\/html>"

var code_output = ""

var compiled_code = document.getElementById("compiledCode");

function play_notes(){
    song = document.getElementById("textBox").value;
    bg = document.getElementById("textBg");
    playArrow = document.getElementById("playArrow");
    playArrow.classList.add('play');
    bg.style.top = "4.5em";
    bg.style.display = "block";
    console.log(song);
    lines = song.split(/\r?\n/);
    console.log(lines);
    sound_delay = 0;
    code_output = "function play(){document.getElementById('playArrow').classList.add('play');";
    
    for(i = 0; i < lines.length; ++i)
    {
        console.log(lines[i]);
        sound_delay = (1000 * i);
        var bg_pos = bg.offsetTop;

        if(lines[i][0] == 'E')
        {
            console.log("Play E");
            setTimeout(function() {
                new Audio('sounds/E.wav').play();
            }, sound_delay);
            code_output = code_output + "setTimeout(function() {"
            code_output = code_output + "new Audio('sounds/E.wav').play()"
            code_output = code_output +"}, " + sound_delay + ");";
        }
        if(lines[i][1] == 'A')
        {
            console.log("Play A")
            setTimeout(function() {
                new Audio('sounds/A.wav').play();
            }, sound_delay);
            code_output = code_output + "setTimeout(function() {"
            code_output = code_output + "new Audio('sounds/A.wav').play()"
            code_output = code_output +"}, " + sound_delay + ");";
        }
        if(lines[i][2] == 'D')
        {
            console.log("Play D")
            setTimeout(function() {
                new Audio('sounds/D.wav').play();
            }, sound_delay);
            code_output = code_output + "setTimeout(function() {"
            code_output = code_output + "new Audio('sounds/D.wav').play()"
            code_output = code_output +"}, " + sound_delay + ");";
        }
        if(lines[i][3] == 'G')
        {
            console.log("Play G")
            setTimeout(function() {
                new Audio('sounds/G.wav').play();
            }, sound_delay);
            code_output = code_output + "setTimeout(function() {"
            code_output = code_output + "new Audio('sounds/G.wav').play()"
            code_output = code_output +"}, " + sound_delay + ");";
        }
        if(lines[i][4] == 'F')
        {
            console.log("Play F")
            setTimeout(function() {
                new Audio('sounds/F.wav').play();
            }, sound_delay);
            code_output = code_output + "setTimeout(function() {"
            code_output = code_output + "new Audio('sounds/F.wav').play()"
            code_output = code_output +"}, " + sound_delay + ");";
        }
        if(lines[i][5] == 'C')
        {
            console.log("Play C")
            setTimeout(function() {
                new Audio('sounds/C.wav').play();
            }, sound_delay);
            code_output = code_output + "setTimeout(function() {"
            code_output = code_output + "new Audio('sounds/C.wav').play()"
            code_output = code_output +"}, " + sound_delay + ");";
        }
    }
    bg.style.transition = i + "s linear";
    bg.style.top = 4.5 + (i*1.4) + "em";
    
    setTimeout(function() {
        bg.style.top = "4.5em";
        bg.style.transition = "0.5s linear";
        bg.style.display = "none";
        playArrow.classList.remove('play');
    }, sound_delay);
    
    code_output = code_output + "setTimeout(function() {document.getElementById('playArrow').classList.remove('play')}, ";
    code_output = code_output + sound_delay + ");";
    code_output = code_output + "}";
    compiled_code.value = html_template.replace("@@@PLAY_CODE", code_output);
}

function clear_music(){
    document.getElementById("textBox").value = "";
}