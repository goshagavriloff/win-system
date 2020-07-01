
//https://learn.javascript.ru/unselectable

let createWinPanel=(e)=>{
    let winPanel=document.getElementById('win-panel');
    let winPanelStyle=winPanel.style;
    let winPanelLeft=createwinSide(winPanel,'winPanelLeft');
    let winPanelRight=createwinSide(winPanel,'winPanelRight');
    let win=createWinIcon(winPanel,winPanelLeft,'Пуск');
    let costumDesk=document.documentElement.clientHeight*0.95;

    document.getElementById('desktop').style.height=costumDesk+'px';

    winPanelStyle.display='grid';
    winPanelStyle.gridTemplateColumns='  minmax(100px, 5fr) 1fr';
    winPanelStyle.gridTemplateRows='1fr';

    winPanelRight.style.fontWeight='bold';
    winPanelRight.style.textAlign='center';
    winPanelRight.style.display='block';
    winPanelRight.style.margin='auto 0';
    winPanelRight.style.color='white';

    win.addEventListener('click', onClickWin);
    setFonSize();
    setInterval(TimeWin, 100);
    
    
}


let changeWindowsSize=()=>{
    let root=document.getElementById('root');
    let winPanel=document.getElementById('win-panel');
    let costumWin=document.documentElement.clientHeight*0.05;
    let costumDesk=document.documentElement.clientHeight*0.95;
    
    //https://learn.javascript.ru/metrics-window
    root.style.height=document.documentElement.clientHeight+'px';
    root.style.width='100%';

   

    winPanel.style.height=costumWin+'px';
    winPanel.style.width='100%';

    document.getElementById('desktop').style.height=costumDesk+'px';

 
        document.querySelectorAll('.win').forEach((el)=>{
          el.style.height=winPanel.style.height;
          el.style.display='flex';
        });
        

    

        document.querySelectorAll('.windesk').forEach((el)=>{
            el.style.height=document.body.clientHeight*0.6+'px';
            el.style.bottom=winPanel.style.height;
        });


    
    setFonSize();
    
  
}


//https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event


window.addEventListener('resize', changeWindowsSize);


window.onload=changeWindowsSize;

window.addEventListener('load', createWinPanel);

document.body.addEventListener( "contextmenu", function(e) {
  e.preventDefault();
  CloseContextMenu();
  
  let currentClass=e.target.className;
  
  if (e.target.parentElement.className=='win-file'){
        OnContextFileClick(e);
  }
  if (currentClass=='desktop'){
     CreateContextMenu(e);
  }

});

document.body.addEventListener('click',(e)=>{
  CloseContextMenu();
});
