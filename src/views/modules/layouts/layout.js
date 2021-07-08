import Logo from '../components/logo.js'
import Icon from '../components/icon.js'
// import GithubLink from '../components/github-link.js'
// import SlackLink from '../components/slack-link.js'


export default function layout (props = {}) {

  let children = props.children || ""
  let image = props.image || ""
    return `
    <div
    class=""
  >
    <header
      class="
        z1
        pt-1
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
      "
    >
      <a
        aria-label="Begin Blog"
        href="/"
        class="
          text-g0
          text-h0
          text-a2
          cursor-pointer
        "
      >
        ${Logo({ classes: 'logo' })}
      </a>
      <div
        class="
          flex
          items-center
          justify-between
        "
      >
        <button
          aria-label="Menu"
          id="menu-button"
          class="
            ml0
            bg-unset
            text-g0
            text-h0
            text-a2
            hidden-lg
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
    </main>
    <footer
      class="
        pt3
        pb5
        pt5-lg
        pb5-lg
        bg-p5
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
                    text-g0
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
                    text-g0
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
                    text-g0
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
                    text-g0
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
                    text-g0
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
                    text-g0
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
                    text-g0
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
                    text-g0
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
          "
        >
          © 2021 Beginner Corp | 
          <begin-made-with>
            Made with <span slot=emoji class="emoji">💖 </span> in <span slot=place class="place">San Francisco</span>
          </begin-made-with>
        </p>

      </div>

    </footer>
    
  </div>
    `
  }
  