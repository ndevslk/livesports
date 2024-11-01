document.addEventListener('DOMContentLoaded',()=>{
fetch('channels.json',{cache:'no-store'})
.then(response=>response.json())
.then(channels=>{
const channelList=document.getElementById('channel-list');
channels.forEach(channel=>{
const channelDiv=document.createElement('div');
channelDiv.className='channel';
const channelLogo=document.createElement('img');
channelLogo.src=channel.logo;
channelLogo.alt=channel.name;
const channelName=document.createElement('div');
channelName.className='channel-name';
channelName.textContent=channel.name;
channelDiv.appendChild(channelLogo);
channelDiv.appendChild(channelName);
channelDiv.addEventListener('click',()=>{
window.location.href=channel.url;
});
channelList.appendChild(channelDiv);
});
});
});