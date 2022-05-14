function navbar() {
  return `
    <div id="Burger_king">
    <img
      src="https://www.burgerking.in/static/media/logo.d0829240.png"
      id="Icon"
      alt=""
    />
  </div>
  <div id="search">
    <div><h4 id="C1">DINE-IN/TAKEWAY</h4></div>
    <div id="Inp">
      <label class="switch">
        <input type="checkbox" id="Check" />
        <span id="slide" class="slider round"></span>
      </label>
    </div>
    <div><h4 id="C2">DELIVERY</h4></div>
    <div id="search_bar">
      <i class="fa-solid fa-location-dot" id="location"></i>
      <p>Tap on it to pick your location...</p>
    </div>
  </div>
  <div id="Events">
    <div id="h">
      <img
        src="https://www.burgerking.in/static/media/dine-in-black.c32e1cdd.svg"
        class="logo"
        alt=""
      />
     <h4 id="nearby">NEARBY STORES</h4>
    </div>
    <div id="K">
      <img
        src="https://www.burgerking.in/static/media/offers-inactive.81dcb21f.svg"
        class="logo"
        id="logoK"
        alt=""
      />
      <h4 id="king">KING DEALS</h4>
    </div>
    <div>
      <img
        src="https://www.burgerking.in/static/media/login-inactive.de941b20.svg"
        class="logo"
        alt=""
      />
      <h4>LOGIN</h4>
    </div>
    <div>
      <img
        src="https://www.burgerking.in/static/media/cart.3ff203fa.svg"
        class="logo"
        alt=""
      />
      <h4 id="cart">CART</h4>
    </div>
  </div>
  <div>
    <i class="fa-solid fa-magnifying-glass" id="icon_search"></i>
  </div>
    `;
}

function footer() {
  return `
    <div id="Lfoot">
    <div>
     <h4>BK INFO</h4>
        <p>About BK</p>
        <p>Fresh Taste</p>
        <p>Investor Relations</p>
    </div>
    <div>
        <h4>CONTACT</h4>
        <p>Help & Support</p>
        <p>Write to us</p>
        <li>Careers</li>
        <li>Customer Care</li>
        <li>Supply Chaine Queries</li>
        <li>Investor Relations</li>
        <li>Corporate Communications</li>
        <li>Freelancing</li>
    </div>
    <div>
        <h4>BK CARES</h4>
        <p>Nutrition Information</p>
        <p>Creating Brighter Futures</p>
        <p>Trust & Taste</p>
        <p>Covid-19 Safety</p>
    </div>
    <div>
        <h4>LEGAL</h4>
        <p>Terms and Conditions</p>
        <p>Privacy and policy</p>
    </div>
    <div>
        <h4>DOWNLOAD OUR APP</h4>
        <div id="Play">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAmCAYAAAAMe5M4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAgKADAAQAAAABAAAAJgAAAAC36W5BAAAOwklEQVR4Ae2bCbSW0xrHn3OUDEUyhAgZUwjRQEnmKfMUdWuZ52UlZLoJlXFZZmKFikxrIYVExjJcQkUh8zxUMpP2/f+ee/d73+8733e+SXWdzrPWd9733cOzn733s59xnyr7L0yfPr3xV1991XPOnDn/+PXXX5tWV1cviHX1z7//CixYsKC6UaNG81ZaaaVRzZo1G7nlllvOZVZV/Hn88cfbfvzxx8OffPLJ9tOmTbPff/+d4nqoYyvQsGFD23TTTW2nnXaa3qpVqz677rrrv2zGjBlNbrjhhimbbLJJ0Hzrf0vAGqy//vpBez7rxRdfbF796aef9po4cWI7MUId4/f66eRbgVmzZtmECRNaffvtt0Or586d2/utt97K17a+vI6uAAf+xx9/7Fj9xx9/NP7zzz/r6DTrp5VvBdjzEML8ajVA7y80kNVpZ555pj3yyCO2xhprlDXOKqusYt27d7d99tnHtthii7JwFOp04IEHYhwVapa3vnPnznb44Yfnra+kYv/997cdd9yxEhR5+8IACw3YrGeeecYuvfRS69ixo/3yyy9ljXXEEUfYNddcY926dbOLL77Y7rvvPlthhRXKwpWvU48ePaxr1675qguWy62yAw44oGC7YhrIBbeePXsaT2Dvvfe2Tp06FdO15DYNSu5RZIeVV17ZRo8ebfIuvIdcTZO9UWTvzGbLLLOMM1K/fv1sqaWWsscee8xOOOEEZ6wNNtjAjjrqKF+s22+/3d5++207+uijMXJ8vMMOO8xuuukm39yll17a3nzzTdt3332dgZBIV111lX3++ef222+/mdShD7zWWmvZcccdZ4x711132ZQpU2z11Ve3Y4891po0aWIPPPCAyYK2qqoq69Onj7Vt29brpVMzCdcXdb169TL54XbLLbfYBx98YF26dLG1117bNt98c/vmm2+cuePYIIDhr732Wttss83skksusR9++ME23HBDu+yyy+zdd9+12267zfG1a9fODj30UJs3b55df/31/qxBQIGChSYB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" alt="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAAmCAYAAADjufgGAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAgaADAAQAAAABAAAAJgAAAAAwT6UCAAAQuklEQVR4Ae2cCZjP1RrHv/+ZsYRC9n0mWhFtQsWELimprupp15PI1SLqSbRoeVq4RQs3kpJoEdmKuqFQUaQiWyqGZuwMss7Mue/nmDP3n2fwH6XL3Hmf58zv////zu/8zjnv9n3f9xBRFL377rt1N2/e3G779u2tMzIySkYiERd1u+Dj0b0DcUWLFp17zDHHvFW4cOFpN9xww5awnAgfevfuXeKEE07otmzZss4//PBDxV9//VV79uyRcwUyEDbqaL+aQqt06dI69dRTM0888cSPy5Qp03Ps2LHzR40alRkxAYirXr36g19++WWXcePGlV+7du3Rvt6C+R9gB+Li4tSsWTO1aNFiUoUKFbrdcsstSxLq1KlTc+7cuZdPnjy5QAAOsHn55VZWVpamTJkiE4CWCQkJTUaOHLk+bt26dck//fRT5W3btuWXdRas4yA7gJv/5Zdf4rZs2XL+b7/9ViNu586dtayVREIK6P9nB4z52rFjR3VT/pIJtuxM8xOxIcBC1j0jU4YY/9LdqlKliipXrqz169cL0JqZmaly5cqpZMmSwsdZRKNChQqpSJEiHszGx8cLbJOeni4zeSpRooT4jf4AJJ7B8tEHAAwdf/zxSkxM1K5du/Tzzz+zQb4/z5nGCCWhD5tnSnPUg2b2wSjT9icLITg4xReWbrpYalta+mGVNGKBtHTdXoE4+NOH3AMG3Hrrrbryyis9c2Ci+TBNmjRJTz/9tAzQavfu3fr4449laFcNGzb0wpKWlqZnnnlGU6dOVa1atXTVVVd5ATrvvPN09tlna8OGDTJkrKFDh4q+BpJ0xx13eIEpVqyYLEryzycnJ+v666/XI488IsNN6tmzp8aPH68vvvjCv/eQF3aEPRibEJSpIDXuLp20XWo01YShmjRymTR8vrQq/bBZBlBs8+bNPcNnzpzpNRoJRuvR/j59+ui7777zW4p2t2rVShdffLFefvllLVy4MMcqHHfccXr77bc1YsQI9e3bV2+++aYYD62vWrWqOnbsqHfeeUcTJkzwYz3xxBNq06aNtx6lSpXSjTfe6C2QxddeUI4wHv7h6cQmBLiBuKJSemNjuL2zwkdSrzpSuxrSoIXSqMXSRhOQP5nq16+v6dOna9GiRWrSpInXdBgxZ84cr/GPPvqoN/kwd8aMGd5N4CpoIcfBNbRwL1yZrsXNSklJ0TfffONdBL998MEHatmypXcBCM+5556rCy+8UFiJ/IidYhMCdiZiWCAu3gShhRRv/iR+knRahvT8udK1taQXzCr8+ydp6256/ymEXy5btqz39RbFaMmSJV5r0XrcwIcffuhNt0U3/nu2n9vvu8P9cKWjZUeFpUC4AuFaGB/CdeA22rdvr2rVqnlMEfrll2tczAsx/ss3+7PJBGFda2l3CbMMu6QLjpfeaCoNbSmdb9ahaOyydaD3o5F169bVzTff7E1zcANoraW1vVsA+MFErmAImBnNZH7jOQQHAjzyOfRhLBjeqVMnNW3aVJdeeqluuukmzZs3z7uc4sWLeyuB26lUqZL4HqzMgeZ+NN2LNz/afMWKFQ2XL19eCB+ZKx1ngPBvfzc3UHXvbWeWYPsJUpZpT7EU+81cAXtct5TUJkmqbP1XWN5h0w7rg/84NMLvz58/35vjq6++2gPBQYMGadasWSQ7dOaZZ+qss87yJtriXn9lDYsXL84x7UEAcCkge0w6eAENh5kI01dffSVLm3sAiQsCfH700UdeUIhIbH/07bff+ue5rlmz5qgXhIoVK6pmzZq/GNieHunXr9+Tn332Wddp06YdQ0iVK1UxxvYdKdVpaEGF9aCZJ/AMLvupVHGiVMiedSYJcSYghc1aLN9plmGJNYsk0rYeNvBosyigQ9gBhP2iiy6aahHW4+hvbERP4+9el2BXLD4MX3+hMfkyaU9Ju28JJzR/p0lI1UJWmapnKKuN1KG+VLq4PVBAR+IOxCYEMD8IAE8EfOAFwb5vMDyQ1tYwgrkDBAHKMGHYbcJwekk1e7qKXny+qNomSyWK+bsFf46gHYgdwUULAgvA1fMbhGvY0GSvO6g01tzB5r2fI/Fqtv5n/XPVbNWrvUkd+kgTZlpA8aY0x7zErjwEEmQMCduSk5NFBnHr1q0+VHz//ff1448/5mT+/HwO8x9A5TnnnKPy5cvr66+/9pnHWMAioJWEFngGYhzCVUJUcAqYJfQhywn22bhx42FejQ0PJrj88su3G0CArbm3qklOo750WmpIarG1RdYWWPve2jxrc6zNsvaFtcUzndLvc9rV0bVIa+m+nV3KZc0wHDXL2lxri+TWz5br/5BczRqGIiL7eWfUXNq1a+cMrTsDcb5t2rTJWbrX9t251atXu7vuustZrTz3uUeNs9/15bGPRRxu+PDhztLOzoC1s8gkpndb6Oksi+mM8X7u4Y/lHpxlQZ0BXWepaWf4zJlguEaNGjkTlJjGzuvaDBO4++67b8qLL76YHJslCFaAK+4Aix/tSKItwsbz7F5htSr8nPqkzVKdnemKGDzwxHIsAClzrHR3J8mScerdzzDkquz7uVyuu+46kcEjc2cCKzv95NH6scce67OD1157rQ/xbENzefrw/URUQSSSl+QRc6SRqh4wYACVPB++YuEuueQSPfzwwyIBRsjK2H/VmmITAvYSpgdhYL/Dd+5B4IRsIWn/1iY9vDBVSZdYhJDIzX2IfiZImeZGXDaE2KeH/3ryySfLtNznAbp27aoxY8bkhH4Uf1566SW99tprvqCDWf2r6I8wBxeAK6PeQT0Ceu+993xCihoGeRHC2j/yjrzuQ+xCAONgNHsdrryNz1C2Zbh17Id6aPArqvGrVedSa0idU0wQTBhCnyKWZ9pkuaWh0gCLOlPS9t7K7e9ll12mGjVq+Jw/ByFyO/OAH82N7LCMTj/9dJ9E+v77733ugOpfIDtrJ8IkBI2sIQzBN4eqIv3IHDZo0MD7cDt2J3ND4jkqmTAzmmAc45122ml+nvhzND43SxGdrGIMMqOpqak+2UUyKiS2wviJiYkeg5A9JWfx+eefe8G3Y2JeWELVk/7MLykpyY9FJpW1HYxiF4Kg+TAd7d1XEGxPOo7+QL0GDlH1VKswxtsDM8qZqtu1ywrplB3abjwYO9kyzG9J8xZb8LC3ipvrHMn01a5d22f4qNqR3AlE9ZDCT3Sql3skhGD0/fffr9tuu82nnPmdTX711Vd9ZXDVqlW+sojZRcgAYJBhCz311FO+uAQYI3v42GOP5dQrGDcIHGMzP7QVCwRzqDTimqh0QgjNvffeK/Pv3rT7H3P5gzBRm6A2QnIsCCK/Mz5jMjYMD4JHdZS5YR15lvlgWRBgCl9PPvmkB81UPRGQg1FsQhCEHkFAAMIVQTDXgFJ0emeieg4YqmqpMMs6ZNoN+s0sZwcWpM8aLVe/z3dqmlnA3yyReDCCwaFgQz0fHxyIqt6dd96Zg7LD7/xGJszOzXkmwHgYd/vtt6tDhw5eM4cNG+Y31cCwiCxGjx7tzwmwoWwsWk6Wks+YZnAIRSyEgvQ1mhZNMAaXZeDVl64HDx7soxcYAJYhHU1qOph31kF08/rrr3uLwTphMOns3r17+3cH64F1YT0wknkQQSC4pLXbtm3rLUK9evVI+vg0N9lNsAUWjIooligWik0IwkgIQxAArkaA+84jJuiBAW+oalq2AHjAbx3M4c9L2KqXZmzUmOl7ZIFjzAQwQiPROHL2bFIQBMrA/E7NAE3EZBOysbmALISmR48emj3bwhDTpqVLl3rs0Lp1az/mGWec4RkGo7kH4WrQoGbNmglXkpiYqFdeeUX9+/f3VoI0MuAU4QkaybuxSvhyS7v7vjAAbeTQC+/mCjNDQYp3MXfGQqDog3m3aEMTJ070Ywd3wDMvvPCCtw7Mi/fgkrBKpMzBSJTPaZTHCaNxSQgdDQsYC+VNCBgR5mcDwzj78I9h49Vj4HBVSSOexTQgKXaGLbJdgyOpGpa5RmkuDwkBexpCG4jBOR/AIi21LXwcxGdaoIEDB+b4djtb7yuLbFbQPjQJc0994KSTTvIWhoIQ5jdQ+A5TA4OwCCGVDsM5bIKPDULAHDH/MBPmE7nwHQZ0797dayMANmg276LQhclv3769N9nMkbHDXHk3xHcEH2uCFUMBwA2MT56BMZg/wtmtWzdZOOmVgHtDhgzxff1AMfzJ1ucYesLbQMbr+Pgs3TlsnHoMGGECYEhPyFOC1kUy9HwkRa01X32zVh6SAITXYNIWLFjgNQsTH5Is4T5X+0cUXkjox5kCmI8WB19PH/ADGglD0Vg0BECIJQl0yimniLATE8oGY4kQmuhxEJCgvTyHxmJ1cDmMD0M4BEPD7WCeowUgvIsr/psGc4MARN/ndwQWy0YJHUWgWMYpK9xCIE5IARZxO7hJBAUMFYQ39DvQNXZLgBDQTGzizcx3HTJO3Qa+pcprKDoVtjriHo2PrNXzSrH80RZLB2Au/hihRY8//rjXMsw70o4fx4TDQDYG88xmcpoIRA4QY0OIufHPmHl8NiDzueee89p5wQUXCNfA+Jwo4uzgAw884P0vz7PJZCa7dOniTS+YAODGu7A0gWmYdQSGZ6wi5y0E2ot7uvvuu/0ce/Xq5TV+X2EI1mR/O8R91sW70H4OvyCkrIUjc1QzIbKlAEVOR2GNsALMKU8UU8awumUMJ1jGMNW5hNQM1/2R0S61wjU2vVYuw9qUSAN3aaSsK27iYS//05sBNGdAypn5sz35PZnLcHYGwBmI9O81jXSWiHFmEXI6mrn1GT5jlO/DeGZlnFmEnD6M/eCDDzpLBfs+5tedbbTPUNKJMUzrneEUd8UVVzg7zeRM65z5aWeYxZnAOdO+nPHMnzvDFC4pKSkn60c20NyYM7fiTFBy3SdzBz6raC7MNW7c2FmE4d8TBrboxpnlcabtjnWw3xYhOAuDnVkEZwLuzELlOnY0b6IzhrGVkqsnSS+/q4T6Z+ief43VPYPGqNLazZonA31arjFKM9D3X/SeJymMsTNahzYAAHELmHTCMI6aRft2hgOI0Y9DpfhgDoiAL6LzDGgXB08ZE9MPOMMC8DkQ5h+rATDFz19zzTXegnTu3FkrV670mklYCoDlndQFAJ24Cd7He0NYGeZFxIE1wX3hSvYlxgGY4nboQ2KJtdCwDLg8LAKWJZyRIGLg7OQnn3ziw1zC4IMRADKUkmOrHVSq4oq/96l7qMcot7r8DW6ZmrseOtFVVlGOlxxU6mxCR1UfO0bmrYkdZHUmCH7uhrydbbIzxjhjyBGzHnM/ziIDby2wXiZEMc0t2hLEhgk2rFODh3rrzJVxGrZttV7TSv2obZY85H35j4gA8K8geLABUQGagy/mqDtA7Egh5gdgDJYMa5FXik0ILF6dvuhTTTdkmF8ZH71xZCcBYBxTI2PHuUOiBpI5JKAAlEcCAR45/Irb4DAskcGhEEIQb/4F3H9A2lueyZ+an9vCYTRMf/bZZ71/xn+DFwyg5db9f/IbcyEaoOWVstcRb6FoXIKBlGXW0g3M2D8sKKB9dwBgRstvRKHKwGeK5UHS4yyk+tRCp9TopEh+W3DBen6/A7gRC12zLNcy04RhRbyVPjdbZqy8WYPaFloUjw5pfv9owbf8sAOEr2Q0LfE22QzAYCtGrfRYwHxfwX9Xkx84fIA1oP37/e9qop8r+I+roncj333e739c9R8LhxjbzV79fgAAAABJRU5ErkJggg==" alt="">
        </div>
        
   </div>

</div>

<div id="Mfoot">
    <img src="https://www.burgerking.in/static/media/BK_LOGO_PRIMARY_%C2%AE_ST_MAYO_EGG_WHITE_RGB.07fd3a3a.PNG" id="logoFoot" alt="">
    <u>tm & 2022 burger king corporation. all rights reserved</u>
    <div class="social"><i class="fa-brands fa-facebook"></i></div>
    <div class="social"><i class="fa-brands fa-instagram"></i></div>
    <div class="social"><i class="fa-brands fa-twitter"></i></div>
    <div class="social"><i class="fa-brands fa-youtube"></i></div>
</div>
    `;
}

function main(){
  return `
  <div id="login">
  <img
    src="https://www.burgerking.in/static/media/BKLOGO.2e1e9383.png"
    id="burger"
    alt=""
  />
  <h2>Login</h2>
  <p>Enter Your mobile number</p>

  <div>
    <p>
      By continuing, you agree for our Terms & Conditions, Privacy Policy,
      and Content Policy
    </p>
  </div>
</div>

<div id="slido_Image"></div>

<div id="our_menu">
  <div class="Cmenu">
    <div><h1>OUR MENU</h1></div>
    <div>
      <h3>See all <i class="fa-solid fa-greater-than"></i></h3>
    </div>
  </div>
  <div class="Cdata">
    <div class="Buttonleft" id="btnD">
      <i class="fa-solid GG fa-greater-than"></i>
    </div>
    <div class="Scroller" id="MM">
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20211130081552936653_114x101png"
          alt=""
        />
        <h3>BK Cafe</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20201214092757042942_114x101png"
          alt=""
        />
        <h3>Top Picks</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220211073252876092_114x101png"
          alt=""
        />
        <h3>High On Coffee Combos</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220221045917058620_114x101png"
          alt=""
        />
        <h3>New Kings Collection</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210919155700560846_114x101png"
          alt=""
        />
        <h3>Cricket Mania Combos</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220217154844702799_114x101png"
          alt=""
        />
        <h3>Burgers</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20201214094752825353_114x101png"
          alt=""
        />
        <h3>Whopper</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220217155013788571_114x101png"
          alt=""
        />
        <h3>Stunner Menu</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427111853745473_114x101png"
          alt=""
        />
        <h3>Friends & Famitly Combo</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427112037534695_114x101png"
          alt=""
        />
        <h3>Sides</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427112221790841_114x101png"
          alt=""
        />
        <h3>Chicken Wings</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427112353788469_114x101png"
          alt=""
        />
        <h3>Beverages</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210813044722998596_114x101png"
          alt=""
        />
        <h3>Desserts</h3>
      </div>
      <div>
        <img
          src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220217155013788571_114x101png"
          alt=""
        />
        <h3>Pizzas</h3>
      </div>
    </div>
    <div class="Buttonright" id="btnD2"> 
      <i class="fa-solid GG fa-greater-than"></i>
    </div>
  </div>
</div>

<div id="our_deal">
  <div class="Cmenu">
    <div><h1>KINGS DEALS OF THE DAY</h1></div>
  </div>
  <div class="Cdata">
    <div class="Buttonleft BB">
      <i class="fa-solid GG fa-greater-than"></i>
    </div>
    <div class="Scroller">
      <div>
        <img
          class="DealsImg"
          src="https://burgerking-image.s3.amazonaws.com/16431025961x870x420jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="DealsImg"
          src="https://burgerking-image.s3.amazonaws.com/16176883571x1119x540jpg"
          alt=""
        />
      </div>
    </div>
    <div class="Buttonright BB">
      <i class="fa-solid GG fa-greater-than"></i>
    </div>
  </div>

  <div id="Favourites">
    <div class="Cmenu">
      <div><h1>FAVOURITES</h1></div>
    </div>
    <div class="Cdata">
      <div class="Buttonleft" id="btnF">
        <i class="fa-solid GG fa-greater-than"></i>
      </div>
      <div class="Scroller KK">
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20211130081552936653_114x101png"
            alt=""
          />
          <h3>BK Cafe</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20201214092757042942_114x101png"
            alt=""
          />
          <h3>Top Picks</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220211073252876092_114x101png"
            alt=""
          />
          <h3>High On Coffee Combos</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220221045917058620_114x101png"
            alt=""
          />
          <h3>New Kings Collection</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210919155700560846_114x101png"
            alt=""
          />
          <h3>Cricket Mania Combos</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220217154844702799_114x101png"
            alt=""
          />
          <h3>Burgers</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20201214094752825353_114x101png"
            alt=""
          />
          <h3>Whopper</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220217155013788571_114x101png"
            alt=""
          />
          <h3>Stunner Menu</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427111853745473_114x101png"
            alt=""
          />
          <h3>Friends & Famitly Combo</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427112037534695_114x101png"
            alt=""
          />
          <h3>Sides</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427112221790841_114x101png"
            alt=""
          />
          <h3>Chicken Wings</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427112353788469_114x101png"
            alt=""
          />
          <h3>Beverages</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210813044722998596_114x101png"
            alt=""
          />
          <h3>Desserts</h3>
        </div>
        <div>
          <img
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220217155013788571_114x101png"
            alt=""
          />
          <h3>Pizzas</h3>
        </div>
      </div>
      <div class="Buttonright" id="btnF2">
        <i class="fa-solid GG fa-greater-than"></i>
      </div>
    </div>
  </div>
</div>

<div class="here">
  <img
    src="https://burgerking-image.s3.amazonaws.com/1620912375homesectionadK8eLokjpeg"
    id="hereImg"
    alt=""
  />
</div>

<h2 id="bktext">BK SPECIALS</h2>
<div id="bk">
  <div>
    <div class="burg">
      <img
        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20211129155934290360_262x360jpg"
        alt=""
      />
    </div>
    <div class="details">
      <h3>Burger King</h3>
      <p>Our best selling burger with crespy veg paties,, fresh onion</p>
      <div>
        <h3>$30/-</h3>
        <button>Add +</button>
      </div>
    </div>
  </div>

  <div>
    <div class="burg">
      <img
        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20201117115027242926_262x360jpg"
        alt=""
      />
    </div>
    <div class="details">
      <h3>BK CLASSIC CHICKEN</h3>
      <p>Our best selling burger with crespy veg paties,, fresh onion</p>
      <div>
        <h3>$30/-</h3>
        <button>Add +</button>
      </div>
    </div>
  </div>

  <div>
    <div class="burg">
      <img
        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20201203112052742554_262x360jpg"
        alt=""
      />
    </div>
    <div class="details">
      <h3>BK CHICKEN BURGER</h3>
      <p>Our best selling burger with crespy veg paties,, fresh onion</p>
      <div>
        <h3>$30/-</h3>
        <button>Add +</button>
      </div>
    </div>
  </div>

  <div>
    <div class="burg">
      <img
        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314070746205836_262x360jpg"
        alt=""
      />
    </div>
    <div class="details">
      <h3>BK CLASSIC VEG</h3>
      <p>Our best selling burger with crespy veg paties,, fresh onion</p>
      <div>
        <h3>$30/-</h3>
        <button>Add +</button>
      </div>
    </div>
  </div>

  <div>
    <div class="burg">
      <img
        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210430065825460098_262x360jpg"
        alt=""
      />
    </div>
    <div class="details">
      <h3>FRIES (KING)</h3>
      <p>Our best selling burger with crespy veg paties,, fresh onion</p>
      <div>
        <h3>$30/-</h3>
        <button>Add +</button>
      </div>
    </div>
  </div>
</div>

<div id="explorebtn">
  <a href="menu.html"><button id="menubtn">EXPLORE FULL MENU</button></a>
</div>

<div class="here">
  <img
    src="https://www.burgerking.in/static/media/home-bk-wall.96e21fb4.jpg"
    alt=""
    id="Lhere"
  />
</div>
  `
}

export { navbar, footer , main};
