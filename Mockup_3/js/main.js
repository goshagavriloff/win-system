let options={
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
var BigContext=`<div>
                <ul style='list-style:none;background:white;' >
                    <li style='border:blue;' onclick='OnDeleteFileClick()'>Удалить файл</li>
                    <li style='border:blue;' onclick='OnRenameFileClick()'>Переименовать файл</li>
                </ul>
            </div>`;
var SmallContext=`<div>
            <ul style='list-style:none;background:white;' >
                <li style='border:blue;' onclick='OnCreateFileClick()'>Создать файл</li>
                <li style='border:blue;' onclick='OnNextImgClick()'>Следуующий слайд</li>
            </ul>
        </div>`;
var IsOpenWin=false;

//https://learn.javascript.ru/intl
let TimeWin=()=>{
    let content=document.querySelector('.winPanelRight');
    var now =Date.now();
    var formatter = new Intl.DateTimeFormat("ru",options);

    content.innerHTML=formatter.format(now);

}

let OnclickOpenWin=()=>{
    let root=document.getElementById('win-panel');
    let win=create_child('div','windesk',root);
    let winLight=create_child('div','',win);
    let winDark=create_child('div','',win);

    win.style.position='absolute';
    win.style.bottom=root.style.height;

    win.style.height=document.body.clientHeight*0.6+'px';
    win.style.width='30%';

    win.style.display='grid';
    win.style.gridTemplateColumns='  3fr 2fr';
    win.style.gridTemplateRows='1fr';

    winLight.style.background='white';
    winDark.style.background='#0b114d';


    
}

let OnclickCloseWin=()=>{
    let elem=document.querySelector('.windesk');
    let old=document.getElementById('win-panel').removeChild(elem);
}


let onClickWin=(e)=>{
    (!IsOpenWin)?OnclickOpenWin():OnclickCloseWin();
    IsOpenWin=!IsOpenWin;
}

//https://learn.javascript.ru/mouse-clicks
let CreateContextMenu=(e)=>{
    
    let root=document.getElementById('desktop');
    let ContextMenu=create_child('div','contextMenu',root);
    
    ContextMenu.style.position='absolute';
    ContextMenu.style.top=event.clientY+'px';
    ContextMenu.style.left=event.clientX+'px';
    ContextMenu.innerHTML=SmallContext;
}

let OnCreateFileClick=(e)=>{
    console.log('file is created!!!');
    createDeskIcon();


}


let OnContextFileClick=(e)=>{
    
    let root=document.getElementById('desktop');
    let ContextMenu=create_child('div','contextMenu',root);
    
    ContextMenu.style.position='absolute';
    ContextMenu.style.top=event.clientY+'px';
    ContextMenu.style.left=event.clientX+'px';
    ContextMenu.innerHTML=BigContext;
}

let OnNextImgClick=(e)=>{
    
    let back_root=document.getElementById('root');
    let old_back=back_root.style.backgroundImage;
 
   back_root.style.backgroundImage=wheel.get(old_back);
}

let OnDeleteFileClick=(e)=>{
    console.log('file is deleted!!!');

}

let OnRenameFileClick=(e)=>{
    console.log('file is renamed!!!');
}

