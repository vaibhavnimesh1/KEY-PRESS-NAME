const insert = document.getElementById('insert')


window.addEventListener('keypress', (e)=>{
insert.innerHTML= `<div>
<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
     <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>`
})