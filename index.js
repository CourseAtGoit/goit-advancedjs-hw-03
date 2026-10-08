import{a as c,S as u,i as n}from"./assets/vendor-BmyeFVCx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",d="18770359-69995c75016210012c9ceb955";c.defaults.baseURL=p;const g=a=>c.get("/",{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data),y=new u(".gallery a"),l={loaderEl:document.querySelector(".loader"),galleryEl:document.querySelector(".gallery")},h=a=>{const r=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:m,downloads:f})=>`
            <li class="gallery-item">
                <a href="${s}" class="gallery-link">
                    <img
                        class="gallery-image"
                        src="${o}"
                        alt="${e}"
                        width="360"
                        height="200"
                        loading="lazy"
                    />
                    <ul class ="info">
                        <li class="info-item">
                        <span class="info-item-title">Likes</span>
                        <span class="info-item-value">${t}</span>
                        </li>
                        <li class="info-item">
                        <span class="info-item-title">Views</span>
                        <span class="info-item-value">${i}</span>
                        </li>
                        <li class="info-item">
                        <span class="info-item-title">Comments</span>
                        <span class="info-item-value">${m}</span>
                        </li>
                        <li class="info-item">
                        <span class="info-item-title">Downloads</span>
                        <span class="info-item-value">${f}</span>
                        </li>
                    </ul>
                </a>
            </li>`).join("");l.galleryEl.insertAdjacentHTML("beforeend",r),y.refresh()},L=()=>{l.galleryEl.innerHTML=""},E=()=>{l.loaderEl.classList.add("active")},b=()=>{l.loaderEl.classList.remove("active")},v={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery")},S=a=>{a.preventDefault();const r=a.currentTarget,o=r.elements.search_text.value.trim();if(!o){n.error({message:"Please enter a search query",position:"topRight"});return}L(),E(),g(o).then(({hits:s})=>{if(s.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s)}).catch(s=>{console.error("Error fetching images:",s),n.error({message:"Failed to fetch images",position:"topRight"})}).finally(()=>{b(),r.reset()})};v.formEl.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
