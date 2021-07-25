import Logo from '../components/logo.js'
import Icon from '../components/icon.js'


export default function layout (props = {}) {


  let children = props.children || ""
  let image = props.image || ""
    return `
    <div
    class="
    h-full-lg
    "
  >
    <header
      class="
        z1
        pt0
        pr2
        pb0
        pl2
        sticky
        relative-lg
        flex
        items-center
        justify-between
        top0
        bg-p5
        text-g0
      " style="min-width:4.777rem;min-height:1.333rem;"
    >
    <div class="flex items-center justify-between w-full">
      <a
        aria-label="Begin Blog"
        href="/"
        class="
          mr4
          text-g0
          text-h0
          text-a2
          items-center
          cursor-pointer
        "
      >
        ${Logo({ classes: 'logo' })}
      </a>
   
  <nav class="hidden flex-lg items-center justify-between w-full pr-4 pl-4" style="
  top:2.8rem;
  right:0;
  left:0;
  border-bottom-right-radius:6px;
  border-bottom-left-radius:6px;
  ">
    <span class="flex">
      <a class="flex uppercase items-center font-medium leading2 text-p8 radius-pill text-h0 pl-1 pr0 mb-2 mb-none-lg mr1-lg bg-a3 no-underline" alt="https://begin.com/apps" href="https://begin.com/apps"><div class="mr-2 f-p26" style="width:0.888rem;height:0.777rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14"><path fill="#0094FF" fill-rule="evenodd" d="M12.26 8.215l1.207-.773L16 8.908 8 14 0 8.908l2.525-1.466 1.215.773-1.286.741L8 12.486l5.538-3.53-1.278-.74zM8 9.713L0 4.622 8 0l8 4.622-8 5.091zM2.454 4.677L8 8.207l5.538-3.53L8 1.474 2.454 4.677z"/></svg></div><span>Apps</span></a>
      
      <a class="flex uppercase items-center font-medium leading2 text-p8 radius-pill text-h0 pl-1 pr0 mb-2 mb-none-lg mr1-lg bg-a3 no-underline" alt="https://docs.begin.com" href="https://docs.begin.com"><div class="mr-2 f-p26" style="width:0.888rem;height:0.777rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14"><path fill="#0094FF" fill-rule="evenodd" d="M16 4.978l-3.338 6.163H10.16V14l-3.193-1.66L3.773 14v-2.86H2.54C.853 11.14 0 10.245 0 8.453 0 7.92.063 7.334.308 6.86 1.596 4.356 2.612 2.763 3.62 1.533 4.454.52 5.161 0 6.739 0h9.134l-4.127 6.874H2.54c-.436 0-1.089 0-1.089 1.563 0 1.519.626 1.519 1.089 1.519h1.233v-1.66h1.451v3.541l1.742-.904 1.741.904v-3.54h1.452v1.659h1.55l2.704-4.978H16zm-11.175-2.8c-.707.866-1.505 2.089-2.313 3.51h8.327l2.703-4.503H6.739c-.961 0-1.251.193-1.914.993z"/></svg></div><span>Docs</span></a>
      
      <a class="flex uppercase items-center font-medium leading2 text-p8 radius-pill text-h0 pl-1 pr0 mb-2 mb-none-lg mr1-lg bg-a3 no-underline" alt="https://learn.begin.com" href="https://learn.begin.com"><div class="mr-2 f-p26" style="width:0.888rem;height:0.777rem;"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#0094FF" d="M13.781 6.774q.109.43.164.863T14 8.5q0 .742-.246 1.394t-.668 1.144q-.43.492-1.019.875t-1.269.625q-.336.117-.699.207t-.746.152l-.102-2.148 2.398-2q.086-.086.102-.176t-.047-.176q-.086-.125-.187-.152t-.219.051L9.15 9.452l-.148-3.953q0-.187-.156-.344t-.344-.156-.344.156-.156.344v9.5q0 .414-.293.707t-.707.293-.707-.293-.293-.707v-2.25q-.844-.187-1.559-.555t-1.262-.891q-.555-.523-.867-1.246t-.312-1.559q0-.867.223-1.726t.574-1.562q.344-.703.848-1.398t.973-1.203T5.659 1.59t.953-.809q.187-.141.387-.289t.402-.289Q7.667 0 8.003 0t.602.203q.414.289.793.582t.949.801q.57.516 1.039 1.023t.977 1.203q.5.695.848 1.398t.574 1.562z"/></svg></div><span>Learn</span></a>
      
      <a class="flex uppercase items-center font-medium leading2 text-p8 radius-pill text-h0 pl-1 pr0 mb-2 mb-none-lg mr1-lg bg-a3 no-underline" alt="https://github.com/smallwins/begin-community/discussions"  href="https://github.com/smallwins/begin-community/discussions"><div class="mr-2 f-p26" style="width:0.888rem;height:0.777rem;"><svg viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><path d="M15.99 4.058c.07 1.062-.22 2.663-1.99 4.319-3.01 2.798-5.4 5.056-5.42 5.074L8 14l-.58-.549C7.4 13.433 5.01 11.175 2 8.377.23 6.72-.06 5.12.01 4.057c.08-1.24.7-2.401 1.66-3.103C2.5.35 3.59 0 4.68 0 6.33 0 7.38.639 8 1.413 8.62.639 9.67 0 11.32 0c1.09 0 2.18.35 3.01.954.96.702 1.58 1.862 1.66 3.104zm-3.14 3.32c1.37-1.278 1.6-2.465 1.54-3.24-.06-.989-.59-1.718-1.07-2.06-.54-.404-1.29-.638-2-.638-2.29 0-2.48 1.817-2.52 2.024-.05.234-.23.567-.77.567-.56 0-.79-.306-.83-.576-.03-.189-.23-2.015-2.52-2.015-.71 0-1.46.234-2 .638-.48.342-1.01 1.071-1.07 2.06-.06.775.17 1.962 1.54 3.24C5.28 9.366 7.11 11.076 8 11.913c.89-.837 2.72-2.547 4.85-4.535z" fill="#0094FF" fill-rule="evenodd"/></svg></div><span>Community</span></a>
      
      <a class="flex uppercase items-center font-medium leading2 text-p8 radius-pill text-h0 pl-1 pr0 mb-2 mb-none-lg mr1-lg bg-a3 no-underline" alt="https://begin.com/support" href="https://begin.com/support"><div class="mr-2 f-p26" style="width:0.888rem;height:0.777rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14"><path fill="#0094FF" fill-rule="evenodd" d="M12.462 0C14.413 0 16 1.504 16 3.354v3.792c0 1.85-1.587 3.354-3.538 3.354H9.317l-3.702 3.3a.852.852 0 01-.538.2.821.821 0 01-.298-.055.735.735 0 01-.471-.674V10.5h-.77C1.587 10.5 0 8.996 0 7.146V3.354C0 1.504 1.587 0 3.538 0h8.924zm2 7.146V3.354c0-1.048-.895-1.896-2-1.896H3.538c-1.105 0-2 .848-2 1.896v3.792c0 1.048.895 1.896 2 1.896h2.308v2.606l2.856-2.606h3.76c1.105 0 2-.848 2-1.896z"/></svg></div><span>Support</span></a>
    </span>
    <span>
      <a href="https://begin.com/login" class="pt-4
      pr-1
      pb-4
      pl-1
      mt-3
      mt-none-lg
      mr0
      mb-2
      mb-none-lg
      ml-3
      ml-none-lg
      font-medium
      text-center
      text-p5
      text-h0
      uppercase
      radius-pill
      no-underline
      bg-p10
      transition-all" style="max-width: 6rem;">Login</a>
    </span>
  </nav>
  </div>

  <div
    class="
      flex
      items-center
      justify-between
      hidden-lg
    "
  >
    <button
      aria-label="Menu"
      class="
        ml0
        bg-unset
        text-g0
        text-h0
        text-a2
      
        cursor-pointer
      "
    >
      ${Icon({ href: 'hamburger', classes: 'icon fill-current' })}
    </button>
  </div>
      
  <div class="indicator bg-image0 absolute right0 bottom0 left0"></div>
    </header>
    
    <main
      id="main"
      class="
        h-full
        p3
        overflow-auto
      "
    >
      <div
        class="
          max-width-content
          m-auto
        "
      >
        <h1
          class="
            mb1
            font-semibold
            text2
          "
        >
        </h1>
        ${children}
        
      </div>
   
    <footer
      class="
        pt3
        pb5
        pt5-lg
        pb5-lg
   
        text-g0
      "
    >
      <div
        class="
          flex
          flex-wrap
          container
          container-lg
          m-auto
          pr1
          pl1
          pr3-lg
          pl3-lg
        "
      >
        <div
          class="
            icon-size
            mr2
          "
       >
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
              <defs>
                <path id="voz0a" d="M13.54 6.06V.54a.54.54 0 0 0-.6-.54 14.57 14.57 0 0 0-7.49 3.13.54.54 0 0 0-.03.8l3.87 3.9c.19.19.47.2.69.06a8.13 8.13 0 0 1 3.1-1.3.54.54 0 0 0 .46-.53"></path>
                <path id="voz0b" d="M7.83 19.38a8.25 8.25 0 0 1-1.29-3.13.54.54 0 0 0-.52-.45H.54a.54.54 0 0 0-.54.6 14.79 14.79 0 0 0 3.1 7.54c.2.25.58.26.8.04l3.88-3.9c.18-.2.2-.48.05-.7"></path>
                <path id="voz0c" d="M23.76 3.13A14.57 14.57 0 0 0 16.26 0a.54.54 0 0 0-.58.54v5.52c0 .26.2.48.45.53 1.13.21 2.19.66 3.1 1.3.22.14.5.13.7-.06l3.87-3.9a.54.54 0 0 0-.04-.8"></path>
                <path id="voz0d" d="M14.23 16.63L5.42 25.5c-.22.22-.21.6.03.8a14.57 14.57 0 0 0 18.31 0c.25-.2.26-.58.04-.8L15 16.63a.53.53 0 0 0-.76 0"></path>
                <path id="voz0e" d="M7.77 9.36L3.9 5.46a.53.53 0 0 0-.8.04A14.8 14.8 0 0 0 0 13.04c-.03.32.22.6.54.6h5.48c.26 0 .47-.2.52-.45.21-1.15.66-2.21 1.29-3.14a.54.54 0 0 0-.06-.69"></path>
                <path id="voz0f" d="M23.2 13.64h5.48c.32 0 .57-.28.53-.6a14.79 14.79 0 0 0-3.1-7.54.53.53 0 0 0-.8-.04l-3.87 3.9a.54.54 0 0 0-.05.7 8.25 8.25 0 0 1 1.29 3.12c.05.26.26.46.52.46"></path>
                <path id="voz0g" d="M22.68 16.25a8.25 8.25 0 0 1-1.3 3.13c-.14.22-.12.5.06.7l3.88 3.9c.22.22.6.2.79-.04a14.79 14.79 0 0 0 3.1-7.55.54.54 0 0 0-.53-.59H23.2c-.26 0-.47.2-.52.45"></path>
              </defs>
              <g>
                <g>
                  <g>
                    <use fill="#ff9e00" xlink:href="#voz0a"></use>
                  </g>
                  <g>
                    <use fill="#fd7854" xlink:href="#voz0b"></use>
                  </g>
                  <g>
                    <use fill="#ff9e00" xlink:href="#voz0c"></use>
                  </g>
                  <g>
                    <use fill="#fd6d6d" xlink:href="#voz0d"></use>
                  </g>
                  <g>
                    <use fill="#fe8d26" xlink:href="#voz0e"></use>
                  </g>
                  <g>
                    <use fill="#fe8d26" xlink:href="#voz0f"></use>
                  </g>
                  <g>
                    <use fill="#fd7e5b" xlink:href="#voz0g"></use>
                  </g>
                </g>
              </g>
            </svg>

        </div>

        <div
          class="
            mb3
            grid
            gap2
            col-1
            col-3-lg
          "
        >

          <div>

            <h6
              class="
                mb-1
                font-semibold
                text0
                text-g3
              "
            >
              Support
            </h6>

            <ul
              class="
                block
                list-none
              "
            >
              <li
                class="
                  mb-1
                "
              >
                <a
                  class="
                    text0
                    text-p5
                    no-underline
                    underline-hover
                  "
                  href="/"
                >
                  Community
                </a>
              </li>

              <li
                class="
                  mb-1
                "
              >
                <a
                  class="
                    text0
                    text-p5
                    no-underline
                    underline-hover
                  "
                  href="https://begin-help.zendesk.com"
                >
                  Support
                </a>
              </li>

              <li
                class="
                  mb-1
                "
              >
                <a
                  class="
                    text0
                    text-p5
                    no-underline
                    underline-hover
                  "
                  href="https://github.com/beginner-corp/begin-community"
                >
                  Issue tracker
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h6
              class="
                mb-1
                font-semibold
                text0
                text-g3
              "
            >
              About Us
            </h6>

            <ul
              class="
                block
                list-none
              "
            >

              <li
                class="
                  mb-1
                "
              >
                <a
                  class="
                    text0
                    text-p5
                    no-underline
                    underline-hover
                  "
                  href="https://twitter.com/begin"
                >
                  Twitter
                </a>
              </li>

              <li
                class="
                  mb-1
                "
              >
                <a
                  class="
                    text0
                    text-p5
                    no-underline
                    underline-hover
                  "
                  href="https://github.com/beginner-corp"
                >
                  GitHub
                </a>
              </li>

              <li
                class="
                  mb-1
                "
              >
                <a
                  class="
                    text0
                    text-p5
                    no-underline
                    underline-hover
                  "
                  href="https://blog.begin.com"
                >
                  Blog
                </a>
              </li>

            </ul>

          </div>


          <div>

            <h6
              class="
                mb-1
                font-semibold
                text0
                text-g3
              "
            >
              Rules & Legal
            </h6>

            <ul
              class="
                block
                list-none
              "
            >

              <li
                class="
                  mb-1
                "
              >
                <a
                  class="
                    text0
                    text-p5
                    no-underline
                    underline-hover
                  "
                  href="https://github.com/beginner-corp/policy/blob/master/begin-privacy-policy.md"
                >
                  Privacy policy
                </a>
              </li>

              <li
                class="
                  mb-1
                "
              >
                <a
                  class="
                    text0
                    text-p5
                    no-underline
                    underline-hover
                  "
                  href="https://github.com/beginner-corp/policy/blob/master/begin-community-code-of-conduct.md"
                >
                  Community guidelines
                </a>
              </li>

            </ul>

          </div>

        </div>


        <p
          class="
            ml4
            text-p5
          "
        >
          © 2021 Beginner Corp | 
          <begin-made-with class="text-p5">
            Made with <span slot=emoji class="emoji">💖 </span> in <span slot=place class="place">San Francisco</span>
          </begin-made-with>
        </p>

      </div>

    </footer>
    </main>
  </div>
    `
  }
  