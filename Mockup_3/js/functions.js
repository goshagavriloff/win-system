let create_child=(tag_child,class_child='',root)=>{
    let child=document.createElement(tag_child);

    child.className=class_child; 
    root.append(child);
 
    return child;
    
}

let setFonSize=()=>{
    let costumWin=document.documentElement.clientHeight*0.05;
    let fontWin=costumWin*0.5;
    document.body.style.fontSize=fontWin +'px';
}

let createwinSide=(winPanel,side)=>{
    let NewWinPanel=create_child('div','',winPanel);

    NewWinPanel.style.display='flex';
    NewWinPanel.className=side;

    return NewWinPanel;
}

let createWinIcon=(winPanel,side,icon)=>{
    let win=create_child('img','win',side);
  
    win.setAttribute('src', icons.get(icon));;
    win.style.height=winPanel.style.height;
    win.style.display='flex';

    return win;
}


let createDeskIcon=(icon='Папка')=>{
    let root=document.getElementById('desktop');
    let winFile=create_child('div','win-file',root);
    let winImg=create_child('img','win',winFile);
    let winName=create_child('p','',winFile);

    winImg.setAttribute('src', icons.get(icon));
    winImg.height=document.documentElement.clientHeight*0.05;
    winName.innerHTML='New Folder';
    winName.style.color='black';
    winName.style.weight='bold';
    return winFile;

}
  
let CloseContextMenu=()=>{
    try {
        let elem=document.querySelector('.contextMenu');
        let old=document.getElementById('desktop').removeChild(elem);
    } catch (error) {
        
    }

}