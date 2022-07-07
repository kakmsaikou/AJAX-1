let n = 2;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
      }
      n++;
    }
  };
  request.send();
};

// json
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response); // 解析json
        // myName.textContent = object.name;
        console.log(object);
      }
    }
  };
  request.send();
};

// xml
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        console.log(request.status);
      }
    }
  };
  request.send();
};

// html
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./3.html");
  request.onload = () => {
    // 创建 div 标签
    const div = document.createElement("div");
    // 填写 div 内容
    div.innerHTML = request.response;
    // 把 div 标签插入到 body 中
    document.body.append(div);
  };
  request.onerror = () => {};
  request.send();
};

// js
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./2.js");
  request.onload = () => {
    // 创建 script 标签
    const script = document.createElement("script");
    // 填写 script 内容
    script.innerHTML = request.response;
    // 把 script 标签插入到 body 中
    document.body.append(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

// css
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./style.css"); // readyStatue === 1
  // 监听readyState发生变化
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      // 监听是否下载成功
      if (request.status >= 200 && request.status < 300) {
        // 创建style标签
        const style = document.createElement("style");
        // 填写style内容
        style.innerHTML = request.response;
        // 把 style 标签插入到 head 中
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send(); // readyStatue === 2
};
