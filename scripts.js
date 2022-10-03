
const allDropdown=document.querySelectorAll('#sidebar .side-dropdown');
const sidebar=document.getElementById('sidebar');
allDropdown.forEach(item=>{
    const a=item.parentElement.querySelector('a:first-child');
    a.addEventListener('click',(e)=>{
        e.preventDefault();
        if(!a.classList.contains('active')){
            allDropdown.forEach(i=>{
                const aLink=i.parentElement.querySelector('a:first-child');
                aLink.classList.remove('active');
                i.classList.remove('show');
            })
        }
        a.classList.toggle('active');
        item.classList.toggle('show');
    });
})
// none element
const sidemenuelement=sidebar.querySelectorAll('.side-menu .none');
sidemenuelement.forEach(side=>{
    side.addEventListener('click',(e)=>{
        side.querySelector('a').classList.add('active');
        sidemenuelement.forEach(side1=>{
            if(!(side1==side)){
                side1.querySelector('a').classList.remove('active');
            }
        })
    })
});
const sideSubElement=sidebar.querySelectorAll('.side-menu .drop');
sideSubElement.forEach(sideB=>{
    const elements=sideB.querySelectorAll('.side-dropdown li');
    console.log(elements);
elements.forEach(side=>{
    side.addEventListener('click',(e)=>{
        side.querySelector('a').classList.add('active');
        elements.forEach(side1=>{
            if(!(side1==side)){
                side1.querySelector('a').classList.remove('active');
            }
        })
    })
})})
// 
// profile
const profile=document.querySelector('nav .profile');
const imgProfile=profile.querySelector('img');
const dropdownProfile=profile.querySelector('.profile-link');
imgProfile.addEventListener('click',()=>{
    dropdownProfile.classList.toggle('show');
});
const allMenu=document.querySelectorAll('main .content-data .head .menu');
allMenu.forEach(item=>{
    const icon=item.querySelector('.icon');
    const menuLink=item.querySelector('.menu-link');
    icon.addEventListener('click',()=>{
        menuLink.classList.toggle('show');
    })
})
window.addEventListener('click',(e)=>{
    if(e.target !== imgProfile){
        if(e.target !== dropdownProfile){
            if(dropdownProfile.classList.contains('show')){
                dropdownProfile.classList.remove('show');
            }
        }
    }
    allMenu.forEach(item=>{
        const icon=item.querySelector('.icon');
        const menuLink=item.querySelector('.menu-link');
        if(e.target !== icon){
            if(e.target !== menuLink){
                if(menuLink.classList.contains('show')){
                      menuLink.classList.remove('show');
                }
            }
        }
    })
})
// sidebar collapse
const toggleSideBar=document.querySelector('nav .toggle-sidebar');
const allSideDivider=document.querySelectorAll('#sidebar .divider');

toggleSideBar.addEventListener('click',()=>{
    sidebar.classList.toggle('hide');
    if(sidebar.classList.contains('hide')){
        allSideDivider.forEach(item=>{
            item.textContent='';
        })
        allDropdown.forEach(item=>{
            const a=item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        })
    }else{
        allSideDivider.forEach(item=>{
            item.textContent=item.dataset.text;
        })
    }

})
// progress bar
const allProgress=document.querySelectorAll('main .card .progress');
allProgress.forEach(item=>{
    item.style.setProperty('--value',item.dataset.value)
})
sidebar.addEventListener('mouseleave',()=>{
    if(sidebar.classList.contains('hide')){
    allDropdown.forEach(item=>{
        const a=item.parentElement.querySelector('a:first-child');
        a.classList.toggle('acitve');
        item.classList.toggle('show');
    })
    
}
})
sidebar.addEventListener('mouseenter',()=>{
    if(sidebar.classList.contains('hide')){
    allDropdown.forEach(item=>{
        const a=item.parentElement.querySelector('a:first-child');
        a.classList.toggle('acitve');
        item.classList.toggle('show');
    })
}
})
var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

