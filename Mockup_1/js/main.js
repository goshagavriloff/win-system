
let create_child=(tag_child,class_child='',root)=>{
    let child=document.createElement(tag_child);
    child.className=class_child; 
    root.append(child);
    return child;
    
}

let fill_child_from_Arr=(tag_child,arr,root)=>{
    arr.forEach((el,i)=>{
        let child=create_child(tag_child,'',root);
        child.innerHTML=arr[i];
    });
}

let root=document.getElementById('root');
let css_of_root=root.style;

css_of_root.width='100%';
css_of_root.height='100%';
css_of_root.background='black';
css_of_root.color='white';

let container=create_child('div','container',root);

var title_div=create_child('div','',container);
var safe_div=create_child('div','',container);
var sets_div=create_child('div','',container);
var default_div=create_child('div','',container);
var descryption_div=create_child('div','',container);
var footer_div=create_child('div','',container);

const text_BIOS={
                    'title_div':['Дополнительные варианты загрузки'],
                    'safe_div':['Выберете дополнительные параметры для: Windows 10',
                                '(Выберете нужный элемент с помощью клавиш со стрелками)'],
                    'sets_div':['Безопасный режим',
                                'Безопасный режим с загрузкой сетевых драйверов',
                                'Безопасный режим с поддержкой комадной строки'],
                    'default_div':[
                        'Введение журнала загрузки',
                        'Включение видеорежима с низким разрешением',
                        'Режим отладки',
                        'Отключить автоматическую перезагрузку при отказе системы',
                        'Отключение обязательной проверки подписи драйверов',
                        'Отключение раннего запуска антивредоносного драйвера',
                        'Обычная загрузка Windows',
                    ],
                    'descryption_div':['Описание:',
                                        'Запуск Windows только с основными драйверами и службами. Применяйте его, только если вы не можете загрузить компьютер после установки нового устройства или драйвера.'],
                    'footer_div':['ВВОД=Выбрать','ESC=Отмена'],
                
                };

for (let [key, value] of Object.entries(text_BIOS)) {
    window[key].style.padding='20px 0';  
    fill_child_from_Arr('p',value,window[key]);
  }
  
  title_div.style.background='white';
  title_div.style.color='black';
  title_div.style.textAlign ='center';

sets_div.querySelectorAll('p').forEach((el,i)=>{
     el.style.paddingLeft='40px';
});
default_div.querySelectorAll('p').forEach((el,i)=>{
     el.style.paddingLeft='40px';
});
descryption_div.querySelectorAll('p').forEach((el,i)=>{
     el.style.paddingLeft='40px';
});


default_div.querySelector('p:last-child').style.marginTop='60px';

descryption_div.style.display='flex';
descryption_div.style.justifyContent='space-between';

footer_div.style.display='flex';
footer_div.style.justifyContent='space-between';

footer_div.style.background='white';
footer_div.style.color='black';

title_div.style.padding='0px';
footer_div.style.padding='0px';

document.body.style.background='black';