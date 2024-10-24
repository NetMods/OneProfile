import { OPTIONS } from './constants'

export const getSVG = (svg: string) => {
  switch (svg) {
    case OPTIONS.LEETCODE:
      return (
        <svg
          viewBox="0 0 95 111"
          fill="none"
          width="35"
          height="29.539"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
            fill="#FFA116"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
            fill="#B3B3B3"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
            fill="black"
          ></path>
        </svg>
      )
    case OPTIONS.GFG:
      return (
        <svg
          id="GFG"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="29.539"
          viewBox="0 0 59.077 29.539"
        >
          <path
            id="Path_402"
            data-name="Path 402"
            d="M193.664,1471.966H169.257a9.748,9.748,0,0,1,17.129-5.146l3.55-3.57a14.77,14.77,0,0,0-25.724,8.716h-.085a14.77,14.77,0,0,0-25.724-8.716l3.55,3.57a9.748,9.748,0,0,1,17.129,5.146H134.674q-.043.565-.044,1.141a14.771,14.771,0,0,0,29.149,3.383h.778a14.769,14.769,0,0,0,29.149-3.383Q193.708,1472.531,193.664,1471.966ZM149.4,1482.855a9.749,9.749,0,0,1-9.151-6.385h18.3A9.75,9.75,0,0,1,149.4,1482.855Zm29.538,0a9.75,9.75,0,0,1-9.152-6.385h18.3A9.75,9.75,0,0,1,178.939,1482.855Z"
            transform="translate(-134.631 -1458.338)"
            fill="#2f8d46"
          />
        </svg>
      )
    case OPTIONS.CODEFORCES:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          id="code-forces"
        >
          <path
            fill="#F44336"
            d="M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"
          ></path>
          <path
            fill="#2196F3"
            d="M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z"
          ></path>
          <path
            fill="#FFC107"
            d="M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z"
          ></path>
        </svg>
      )
    case OPTIONS.CODECHEF:
      return (
        <svg
          width="100"
          height="100"
          viewBox="0 0 280 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M254.34 34.34C252.31 32.04 249.61 30.78 246.74 30.78C246.53 30.78 246.32 30.79 246.11 30.8L69.36 42.34H69.33H69.3C60.65 43.19 55.71 48.44 55 57.5L54.92 58.55C54.75 58.53 54.58 58.52 54.42 58.52C54.17 58.52 53.92 58.54 53.68 58.59C53.47 58.61 53.23 58.67 52.97 58.76V55.06C54.81 53.87 55.51 50.82 56.61 45.44C56.75 44.74 56.9 44.03 57.05 43.32C58.4 40.32 60.39 37.53 62.33 34.83C65.67 30.17 69.12 25.35 68.76 19.68L68.53 18.85C64.76 11.47 59.72 6.76 53.13 4.44C51.15 3.73 49.37 3.35 47.94 3.05C47.35 2.93 46.84 2.82 46.41 2.71L46.26 2.68C42.59 2 38.62 1.37 34.53 1.37C32.79 1.37 31.18 1.48 29.58 1.71C27.57 2 25.52 2.93 23.35 3.92C21.02 4.98 18.61 6.07 16.5 6.22L15.98 6.32C11.31 7.86 9.78997 9.99999 8.55997 11.73C8.46997 11.85 8.38997 11.97 8.29997 12.1L8.08997 12.46C6.55997 15.79 6.17997 19.2 6.94997 22.62L6.99997 22.78C7.56997 24.6 8.24997 26.37 8.89997 28.07C10.2 31.46 11.42 34.67 11.92 38.26L12.18 39.02C12.68 39.9 13.06 41.24 13.48 42.66C14.33 45.6 15.39 49.25 18.23 52.15L18.24 52.44V56.47C18.24 56.47 7.69997 61.56 4.63997 63.83C3.08997 64.98 1.05997 67.79 4.77997 70.14C7.63997 71.95 16.74 76.71 16.71 76.98C16.39 80.22 17.5 83.14 18.55 84.37C20.27 86.4 23.09 87.56 26.3 87.56C29.37 87.56 32.39 86.49 34.39 84.71C34.89 84.26 35.32 83.78 35.67 83.29C36.03 83.79 36.45 84.27 36.95 84.71C38.94 86.49 41.97 87.56 45.04 87.56C48.25 87.56 51.07 86.4 52.79 84.37C53.92 83.04 55.14 80.66 54.51 76.94L54.4 76.33C54.46 76.33 56.03 75.55 56.03 75.55C56.03 75.55 56.03 75.56 56.04 75.68C56.22 77.71 56.53 81.27 61.88 81.73L61.94 81.74H62L246.18 86.7C246.27 86.7 246.36 86.7 246.46 86.7C249.39 86.7 252.14 85.46 254.21 83.22C256.23 81.03 257.34 78.17 257.34 75.15V42.35C257.35 39.38 256.28 36.54 254.34 34.34Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M69.5 44.46L246.24 32.92C251.17 32.6 255.22 37.16 255.22 42.35V75.14C255.22 80.32 251.18 84.7 246.24 84.57L62.07 79.61C58.28 79.28 58.31 77.06 58.11 74.9C71.14 72.54 63.78 56.85 57.13 57.67C57.86 48.23 63.31 45.07 69.5 44.46Z"
            fill="url(#paint0_linear_9_45)"
          />
          <path
            d="M57.4 61.65C59.6 62.37 61.41 63.39 62.82 64.71C63.13 64.93 63.28 65.18 63.28 65.47C63.28 65.94 62.93 66.39 62.22 66.83C61.39 67.35 60.15 68.27 58.51 69.59C56.99 70.8 55.76 71.68 54.83 72.24C54.65 72.33 54.47 72.38 54.29 72.38C54.02 72.38 53.78 72.28 53.59 72.1C53.39 71.91 53.29 71.69 53.29 71.44C53.29 71.22 53.37 71.03 53.53 70.84C53.75 70.48 54.25 70.08 55.05 69.65C55.57 69.38 56.22 68.94 57 68.32C57.94 67.56 58.59 67.06 58.95 66.83C59.74 66.43 60.14 66.15 60.14 65.99C60.14 65.95 60.13 65.92 60.11 65.88C59.68 65.12 58.96 64.55 57.97 64.17C57.09 63.92 56.19 63.66 55.29 63.38C54.23 63.06 53.44 62.6 52.93 62C52.89 61.95 52.88 61.88 52.88 61.81C52.88 61.59 53.01 61.35 53.26 61.09C53.51 60.83 53.76 60.7 53.99 60.7C54.13 60.66 54.28 60.65 54.42 60.65C54.84 60.65 55.35 60.78 55.96 61.03C56.43 61.23 56.91 61.43 57.4 61.65ZM15.15 60.76C15.56 60.76 15.9 60.87 16.17 61.09C16.43 61.31 16.56 61.56 16.56 61.85C16.56 62.07 16.48 62.26 16.32 62.42C15.72 63.07 14.5 63.77 12.64 64.51C10.92 65.2 9.77003 65.99 9.17003 66.89C10.18 67.5 11.51 68.17 13.15 68.89C15.77 70.06 17.12 70.67 17.21 70.71C17.55 70.87 17.72 71.13 17.72 71.5C17.76 71.95 17.58 72.33 17.19 72.65C16.8 72.97 16.35 73.12 15.85 73.12C15.65 73.12 15.46 73.08 15.28 73.01C15.06 72.79 14.77 72.54 14.39 72.25C12.01 70.95 9.46003 69.71 6.75003 68.54C6.48003 68.43 6.21003 68.33 5.94003 68.24C5.60003 68.08 5.40003 67.84 5.34003 67.54C5.34003 66.76 5.68003 66.04 6.37003 65.37C7.20003 64.7 8.57003 63.94 10.49 63.07C12.35 62.24 13.69 61.47 14.53 60.77C14.53 60.76 14.73 60.76 15.15 60.76Z"
            fill="#5B4538"
          />
          <path
            d="M32.14 60.72C31.69 60.07 31.27 59.61 30.89 59.34C30.51 59.07 30.07 58.94 29.56 58.94C29.38 58.94 29.22 58.97 29.09 59.02L26.09 60.06C25.92 60.12 25.72 60.14 25.5 60.14C25.1 60.14 24.78 60.05 24.54 59.86C24.29 59.68 23.99 59.31 23.64 58.76L22.81 59.31C23.33 60.06 23.78 60.56 24.14 60.8C24.51 61.05 24.97 61.17 25.54 61.17C25.79 61.17 26.04 61.13 26.28 61.06L29.03 60.06C29.21 59.99 29.41 59.95 29.62 59.95C29.97 59.95 30.26 60.02 30.47 60.17C30.68 60.31 30.98 60.64 31.36 61.16L32.14 60.72Z"
            fill="#5B4538"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.41 77.29C53.92 86.31 42.89 87.18 38.36 83.13C35.23 80.33 36.11 76.44 40.6 76.68C44.55 76.89 46.88 81.99 52.41 77.29Z"
            fill="#5B4538"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.91 77.29C17.4 86.31 28.43 87.18 32.96 83.13C36.09 80.33 35.21 76.44 30.72 76.68C26.77 76.89 24.44 81.99 18.91 77.29Z"
            fill="#5B4538"
          />
          <path
            d="M29.74 64.2C29.24 63.85 28.62 63.67 27.88 63.67C26.99 63.67 26.27 63.94 25.71 64.47C25.06 65.06 24.81 65.9 24.96 67C25.05 67.89 25.37 68.67 25.91 69.35C26.46 70.03 27.12 70.37 27.88 70.37C28.35 70.37 28.84 70.24 29.34 69.97C30.23 69.44 30.67 68.42 30.67 66.91C30.67 65.55 30.36 64.65 29.74 64.2ZM27.84 67.79C27.32 67.79 26.89 67.37 26.89 66.84C26.89 66.32 27.31 65.89 27.84 65.89C28.36 65.89 28.79 66.31 28.79 66.84C28.79 67.37 28.36 67.79 27.84 67.79Z"
            fill="#5B4538"
          />
          <path
            d="M36.34 75.91C36.62 75.91 36.89 75.86 37.14 75.76C37.39 75.66 37.62 75.54 37.83 75.38C38.04 75.22 38.23 75.04 38.4 74.85C38.57 74.65 38.72 74.46 38.84 74.25C38.97 74.05 39.07 73.86 39.15 73.67C39.23 73.49 39.29 73.34 39.32 73.21C39.31 73.19 39.3 73.16 39.28 73.12C39.26 73.09 39.24 73.06 39.23 73.03C39.21 73.01 39.19 73 39.18 73C38.94 73.44 38.68 73.8 38.38 74.08C38.08 74.36 37.75 74.56 37.4 74.69C37.04 74.82 36.65 74.88 36.24 74.88C35.88 74.88 35.56 74.83 35.28 74.74C34.99 74.65 34.74 74.51 34.51 74.34C34.28 74.16 34.08 73.95 33.89 73.71C33.71 73.47 33.54 73.19 33.39 72.89C33.38 72.89 33.37 72.9 33.35 72.92C33.33 72.94 33.31 72.97 33.3 73C33.28 73.03 33.28 73.05 33.27 73.07C33.41 73.46 33.58 73.82 33.79 74.17C33.99 74.51 34.22 74.81 34.48 75.07C34.74 75.33 35.02 75.54 35.34 75.69C35.64 75.82 35.98 75.9 36.34 75.91Z"
            fill="#5B4538"
          />
          <path
            d="M45.1301 64.14C44.6301 63.79 44.0101 63.61 43.2701 63.61C42.3801 63.61 41.66 63.88 41.1 64.41C40.45 65 40.2 65.85 40.35 66.94C40.44 67.83 40.76 68.61 41.3 69.29C41.85 69.97 42.5101 70.31 43.2701 70.31C43.7401 70.31 44.2301 70.18 44.7301 69.91C45.6201 69.38 46.0601 68.36 46.0601 66.85C46.0701 65.48 45.7601 64.58 45.1301 64.14ZM42.9501 67.9C42.4301 67.9 42.0001 67.47 42.0001 66.95C42.0001 66.43 42.4201 66 42.9501 66C43.4701 66 43.9001 66.42 43.9001 66.95C43.9001 67.48 43.4701 67.9 42.9501 67.9Z"
            fill="#5B4538"
          />
          <path
            d="M51.65 53.38C53.19 52.71 53.98 47.51 55.02 42.67C58.77 34.1 67.14 27.79 66.64 19.82C59.77 6.37 50.15 5.89 46.03 4.82C40.69 3.83 35.36 3.1 30.03 3.87C26.24 4.43 21.33 8.08 16.79 8.39C12.46 9.82 11.38 11.72 10.17 13.39C8.82003 16.33 8.51003 19.26 9.17003 22.2C10.83 27.48 13.38 32.28 14.17 38.03C15.92 41.12 16.04 46.96 20.04 50.88C32.28 45.05 42.28 49.57 51.65 53.38Z"
            fill="url(#paint1_linear_9_45)"
          />
          <path
            d="M51.5 53.44L50.35 52.97C41.16 49.22 31.65 45.33 19.93 50.92L19.86 50.95L19.81 50.9C17.2 48.34 16.24 45.03 15.4 42.1C14.95 40.56 14.53 39.11 13.92 38.02L13.91 37.98C13.38 34.16 12.06 30.69 10.78 27.34C10.14 25.66 9.47001 23.92 8.92001 22.16C8.25001 19.18 8.59001 16.19 9.92001 13.28C10.02 13.14 10.11 13.01 10.2 12.88C11.31 11.32 12.56 9.54999 16.6 8.21999C19.1 8.03999 21.68 6.86999 24.17 5.73999C26.21 4.80999 28.14 3.93999 29.86 3.68999C34.93 2.95999 39.93 3.53999 45.88 4.63999C46.36 4.75999 46.89 4.87999 47.5 5.00999C52.03 5.96999 60.46 7.74 66.56 19.7L66.57 19.74C66.88 24.7 63.79 29.02 60.51 33.59C58.48 36.43 56.37 39.37 54.94 42.64C54.78 43.4 54.62 44.19 54.46 44.97C53.6 49.18 52.86 52.82 51.51 53.41L51.5 53.44ZM31.86 47.91C38.52 47.91 44.54 50.37 50.44 52.78L51.5 53.21C52.72 52.61 53.48 48.88 54.29 44.94C54.45 44.16 54.61 43.37 54.78 42.59C56.23 39.28 58.34 36.33 60.38 33.48C63.63 28.94 66.7 24.66 66.4 19.78C60.33 7.93999 52.29 6.24999 47.48 5.22999C46.86 5.09999 46.33 4.98999 45.85 4.85999C39.93 3.76999 34.94 3.18999 29.9 3.91999C28.21 4.16999 26.3 5.03999 24.27 5.94999C21.76 7.08999 19.17 8.25999 16.65 8.43999C12.7 9.74999 11.47 11.48 10.38 13.02C10.29 13.15 10.2 13.27 10.11 13.4C8.80001 16.25 8.47001 19.2 9.13001 22.12C9.68001 23.87 10.34 25.6 10.99 27.28C12.27 30.63 13.6 34.1 14.13 37.94C14.75 39.04 15.17 40.5 15.62 42.04C16.45 44.92 17.4 48.18 19.93 50.7C24.16 48.69 28.11 47.91 31.86 47.91Z"
            fill="#C8BCA8"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.39 54.28C24.8 51.94 35.84 46.15 50.62 56.3C51.04 53.92 51.08 51.54 50.75 49.16C50.33 43.53 28.27 36.64 20.27 49.04L20.39 54.28Z"
            fill="url(#paint2_linear_9_45)"
          />
          <path
            d="M50.66 56.38L50.6 56.34C44.27 51.99 37.89 50.08 31.62 50.65C26.44 51.12 22.52 53.2 20.41 54.32L20.35 54.35V54.28L20.23 49.03L20.24 49.02C22.4 45.68 25.67 43.5 29.98 42.56C33.51 41.78 37.63 41.91 41.58 42.92C46.84 44.26 50.63 46.83 50.8 49.16C51.13 51.53 51.09 53.94 50.67 56.31L50.66 56.38ZM33.79 50.46C39.35 50.46 44.99 52.39 50.59 56.23C50.99 53.89 51.03 51.51 50.7 49.17C50.53 46.91 46.68 44.31 41.54 43C37.61 42 33.5 41.87 29.98 42.64C25.7 43.58 22.44 45.74 20.3 49.05L20.42 54.2C22.55 53.07 26.45 51.02 31.6 50.55C32.34 50.49 33.07 50.46 33.79 50.46Z"
            fill="#C8BCA8"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.1801 12.5C13.5001 15.93 16.5401 26.76 15.5201 32.44C15.0001 29.46 13.1001 23.55 13.1801 20.22C12.2601 18.22 11.3401 15.8 10.3301 14.87C9.42005 14.04 12.4201 9.09 14.1801 12.5Z"
            fill="url(#paint3_linear_9_45)"
          />
          <path
            d="M21.11 47.36C21.1 47.35 21.1 47.35 21.1 47.34C17.1 42.66 15.45 34.6 14.06 27.81C12.96 22.42 12.02 17.82 10.2 16.37L10.19 16.36C9.96004 16.06 9.83004 15.71 9.78004 15.34C9.69004 14.7 9.85004 14 10.18 13.35C10.5 12.7 10.99 12.12 11.57 11.72C11.97 11.44 12.42 11.26 12.88 11.2L12.89 11.29C12.44 11.34 12.01 11.53 11.62 11.79C11.19 12.38 10.87 12.76 10.55 13.39C9.66004 15.17 11.51 15.08 12.24 16.05C14.08 17.53 14.23 22.38 15.34 27.79C16.73 34.57 17.18 42.62 21.16 47.28C21.17 47.29 21.17 47.29 21.17 47.3L21.11 47.36Z"
            fill="#A99675"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.96 11.1C20.28 14.53 22.02 22.4 21.01 28.09C20.49 25.11 18.59 19.2 18.67 15.87C17.75 13.87 16.65 11.59 16 10.41C15.41 9.35 18.45 7.92 20.96 11.1Z"
            fill="url(#paint4_linear_9_45)"
          />
          <path
            d="M19.63 9.9C18.76 9.31 18.41 9.34 17.66 9.44C17.35 9.48 17.09 9.58 16.89 9.72C16.69 9.86 16.56 10.06 16.52 10.3C16.48 10.66 16.24 10.72 16.57 11.38C18.79 14.39 20.48 19.38 20.95 24.69C21.54 31.42 20.76 38.88 25.22 44.16L25.15 44.22C20.67 38.91 20.01 31.44 19.42 24.7C18.95 19.4 18.52 14.55 16.32 11.56C15.86 10.94 15.72 10.43 15.79 10.03C15.84 9.76 15.98 9.55 16.2 9.39C16.41 9.23 16.69 9.13 17.02 9.09C17.79 8.99 18.8 9.22 19.69 9.83L19.63 9.9Z"
            fill="#A99675"
          />
          <path
            d="M31.87 5.08001C33.93 8.52001 30.14 24 29.47 33.73C29.41 34.55 22.15 1.62001 31.87 5.08001Z"
            fill="url(#paint5_linear_9_45)"
          />
          <path
            d="M31 42.32C28.65 36.2 26.13 25.58 25.74 17.2C25.59 13.9 25.76 10.94 26.41 8.74C27.06 6.53 28.19 5.09 29.94 4.83C30.51 4.74 31.15 4.79 31.86 4.97L31.83 5.06C31.13 4.88 30.48 5.03 29.92 5.12C28.46 5.45 28.63 6.37 27.67 8.44C27.03 10.63 26.67 13.34 26.96 16.64C28.21 24.81 29.74 35.95 31.07 42.29L31 42.32Z"
            fill="#B5A584"
          />
          <path
            d="M37.8401 41.79C37.7501 41.13 37.6601 40.45 37.5601 39.76C36.0301 28.74 34.1601 15.26 40.7201 5.57001L40.8001 5.62001C38.1101 12.79 37.7501 26.44 37.4301 30.85C37.2901 32.75 37.5101 36.83 37.6601 39.74C37.7501 40.42 37.8501 41.1 37.9401 41.77L37.8401 41.79Z"
            fill="#CABB9C"
          />
          <path
            d="M44.9601 43.21C45.1901 37.5 45.8001 30.82 46.3501 25.03C47.7301 17.73 51.4401 14.28 52.4101 6.9L52.4301 6.81C48.8901 12.58 46.9201 18.82 45.8901 25.05C44.8701 31.28 44.7901 37.5 45.0601 43.21H44.9601Z"
            fill="url(#paint6_linear_9_45)"
          />
          <path
            d="M62.1201 15.57C59.1701 24.73 55.6301 33.68 52.0601 42.74C52.1601 30.75 58.5901 16.31 62.1201 15.57Z"
            fill="url(#paint7_linear_9_45)"
          />
          <path
            d="M50.3701 46.78C51.9301 45.15 52.0401 42.65 52.1801 39.75C52.3001 37.07 52.4401 34.05 53.7501 31.06C53.7801 30.95 53.8401 30.76 53.9101 30.5C54.7801 27.47 58.2601 15.29 62.3201 15.51L62.3101 15.6C59.1201 15.48 55.0701 27.53 54.1101 30.54C54.0401 30.79 54.0201 30.95 53.9801 31.07V31.08C52.8401 34.05 52.7701 37.08 52.3901 39.75C52.2601 42.66 52.0101 45.18 50.4301 46.83L50.3701 46.78Z"
            fill="#A99675"
          />
          <path
            d="M90.21 70.23C90.21 70.42 90.09 70.67 89.83 70.99C87.61 73.62 84.66 74.94 80.97 74.94C77.2 74.94 74.15 73.66 71.81 71.1C69.53 68.62 68.38 65.49 68.38 61.72C68.38 58.06 69.5 54.96 71.73 52.42C74.06 49.76 77.03 48.42 80.63 48.42C84.54 48.42 87.61 49.61 89.83 52.01C90.07 52.27 90.19 52.51 90.19 52.71C90.19 52.94 89.78 53.79 88.93 55.25C88.09 56.72 87.56 57.54 87.35 57.72C87.25 57.81 87.13 57.86 86.99 57.86C86.93 57.86 86.63 57.62 86.08 57.14C85.43 56.56 84.79 56.11 84.16 55.79C83.21 55.31 82.21 55.07 81.19 55.07C79.42 55.07 78 55.73 76.94 57.05C75.96 58.27 75.47 59.79 75.47 61.6C75.47 63.42 75.96 64.95 76.94 66.2C78 67.54 79.42 68.22 81.19 68.22C82.24 68.22 83.24 67.99 84.18 67.53C84.79 67.23 85.42 66.81 86.07 66.27C86.6 65.81 86.89 65.59 86.95 65.59C87.07 65.59 87.19 65.66 87.31 65.79C87.5 66.01 88.03 66.76 88.89 68.04C89.77 69.37 90.21 70.1 90.21 70.23Z"
            fill="white"
          />
          <path
            d="M116.16 61.69C116.16 65.44 114.96 68.58 112.56 71.12C110.11 73.69 107 74.98 103.25 74.98C99.52 74.98 96.42 73.68 93.96 71.09C91.54 68.55 90.34 65.42 90.34 61.69C90.34 57.95 91.55 54.81 93.96 52.26C96.43 49.65 99.52 48.35 103.25 48.35C106.96 48.35 110.05 49.65 112.52 52.26C114.95 54.83 116.16 57.98 116.16 61.69ZM109.3 61.65C109.3 59.85 108.75 58.31 107.65 57.05C106.5 55.73 105.03 55.07 103.25 55.07C101.55 55.07 100.1 55.75 98.92 57.13C97.77 58.45 97.19 59.97 97.19 61.69C97.19 63.53 97.73 65.06 98.8 66.29C99.94 67.58 101.42 68.22 103.24 68.22C104.94 68.22 106.39 67.54 107.59 66.18C108.73 64.88 109.3 63.37 109.3 61.65Z"
            fill="white"
          />
          <path
            d="M141.34 61.53C141.34 65.06 140.2 68.13 137.91 70.72C135.89 73.04 133.06 74.26 129.42 74.38C128.72 74.4 126.79 74.42 123.64 74.42C123.05 74.42 122.16 74.4 120.97 74.36C119.78 74.32 118.89 74.3 118.3 74.3C117.95 74.3 117.77 74.16 117.77 73.89C117.77 72.57 117.83 70.58 117.92 67.93C118.03 65.28 118.07 63.3 118.07 61.97C118.07 60.59 118.02 58.52 117.92 55.76C117.82 53 117.77 50.94 117.77 49.56C117.77 49.31 117.95 49.16 118.3 49.11C119.16 49.02 120.56 48.97 122.52 48.97C126.24 48.97 128.65 49.03 129.75 49.13C132.61 49.42 134.85 50.14 136.47 51.3C137.99 52.38 139.19 53.9 140.07 55.84C140.92 57.69 141.34 59.58 141.34 61.53ZM134.41 61.53C134.41 59.5 133.8 57.84 132.58 56.55C131.35 55.21 129.72 54.55 127.69 54.55C125.83 54.55 124.9 54.8 124.9 55.29C124.9 56 124.89 57.07 124.86 58.49C124.84 59.92 124.82 60.98 124.82 61.69C124.82 62.39 124.83 63.44 124.86 64.83C124.88 66.23 124.9 67.29 124.9 68C124.9 68.52 125.86 68.78 127.79 68.78C129.88 68.78 131.52 68.08 132.72 66.71C133.84 65.39 134.41 63.66 134.41 61.53Z"
            fill="white"
          />
          <path
            d="M161.54 68.7C161.54 69.22 161.44 70.16 161.23 71.55C161.01 73.05 160.82 73.94 160.65 74.23C160.51 74.46 160.3 74.57 160.05 74.57C159.94 74.57 159.76 74.55 159.51 74.51C158.63 74.39 156.06 74.33 151.79 74.33C150.86 74.33 149.48 74.32 147.64 74.31C145.81 74.3 144.43 74.29 143.52 74.29C143.12 74.29 142.92 74.12 142.92 73.77C142.92 72.42 142.99 70.4 143.14 67.7C143.29 65 143.37 62.98 143.37 61.63C143.37 60.26 143.3 57.71 143.15 53.97C143.11 53.01 143.05 51.58 142.95 49.66L142.93 49.41C142.91 49.13 143.05 49 143.38 49C144.28 49 145.62 49.02 147.41 49.07C149.2 49.12 150.54 49.14 151.44 49.14C152.32 49.14 153.65 49.12 155.42 49.07C157.19 49.03 158.52 49 159.41 49C160.03 49 160.4 49.23 160.5 49.7C160.56 49.98 160.65 50.81 160.78 52.22C160.9 53.62 160.97 54.47 160.97 54.77C160.97 55.02 160.85 55.15 160.61 55.15C160.54 55.15 160.41 55.14 160.23 55.13C157.01 54.87 154.13 54.73 151.57 54.73C150.93 54.73 150.54 54.88 150.4 55.19C150.34 55.33 150.31 55.79 150.31 56.57C150.31 57.39 150.43 57.93 150.67 58.19C150.87 58.42 151.26 58.53 151.84 58.53C151.96 58.53 152.2 58.52 152.54 58.51C152.89 58.49 153.18 58.49 153.41 58.49C154.93 58.49 156.47 58.45 158.03 58.36C158.17 58.35 158.49 58.32 159.03 58.27C159.44 58.23 159.77 58.2 160.01 58.2C160.3 58.2 160.45 58.34 160.45 58.61C160.45 58.36 160.34 59.28 160.12 61.37C160.02 62.34 159.98 63.3 159.98 64.26C159.98 64.5 159.8 64.62 159.45 64.62C159.45 64.62 158.91 64.56 157.82 64.44C157.13 64.37 155.56 64.34 153.11 64.34H151.19C150.7 64.34 150.4 64.46 150.32 64.7C150.31 64.76 150.3 65.14 150.3 65.82C150.3 66.74 150.36 67.32 150.48 67.59C150.69 68.05 151.46 68.32 152.8 68.4C152.78 68.4 153.66 68.4 155.45 68.4C156.09 68.4 157.04 68.34 158.31 68.23C159.57 68.12 160.52 68.06 161.14 68.06C161.4 68.05 161.54 68.27 161.54 68.7Z"
            fill="white"
          />
          <path
            d="M230 69.15C230 69.65 229.9 70.56 229.7 71.89C229.49 73.34 229.3 74.19 229.14 74.47C229 74.69 228.8 74.8 228.56 74.8C228.46 74.8 228.28 74.78 228.03 74.75C227.18 74.64 224.69 74.58 220.55 74.58C219.65 74.58 218.31 74.57 216.53 74.56C214.76 74.55 213.42 74.54 212.53 74.54C212.14 74.54 211.95 74.37 211.95 74.04C211.95 72.74 212.02 70.8 212.17 68.2C212.32 65.61 212.39 63.66 212.39 62.36C212.39 61.04 212.32 58.59 212.18 54.98C212.14 54.06 212.08 52.68 211.99 50.83L211.97 50.59C211.95 50.32 212.09 50.19 212.41 50.19C213.28 50.19 214.58 50.21 216.32 50.26C218.06 50.31 219.36 50.33 220.23 50.33C221.08 50.33 222.37 50.31 224.09 50.26C225.81 50.22 227.1 50.19 227.95 50.19C228.55 50.19 228.91 50.42 229 50.87C229.05 51.14 229.14 51.94 229.27 53.29C229.39 54.63 229.46 55.45 229.46 55.74C229.46 55.98 229.34 56.11 229.11 56.11C229.04 56.11 228.92 56.1 228.74 56.09C225.62 55.84 222.83 55.71 220.34 55.71C219.72 55.71 219.34 55.86 219.2 56.15C219.14 56.29 219.11 56.73 219.11 57.48C219.11 58.27 219.23 58.79 219.46 59.04C219.66 59.26 220.04 59.37 220.6 59.37C220.72 59.37 220.95 59.36 221.28 59.35C221.62 59.33 221.9 59.33 222.12 59.33C223.59 59.33 225.09 59.29 226.6 59.21C226.73 59.2 227.05 59.17 227.56 59.12C227.96 59.08 228.27 59.05 228.51 59.05C228.79 59.05 228.94 59.18 228.94 59.45C228.94 59.21 228.83 60.1 228.62 62.1C228.52 63.03 228.48 63.95 228.48 64.88C228.48 65.11 228.31 65.23 227.97 65.23C227.97 65.23 227.44 65.17 226.39 65.05C225.73 64.98 224.2 64.95 221.82 64.95H219.96C219.48 64.95 219.2 65.06 219.12 65.29C219.11 65.35 219.1 65.71 219.1 66.37C219.1 67.25 219.16 67.82 219.27 68.07C219.47 68.51 220.22 68.77 221.52 68.85C221.5 68.85 222.35 68.85 224.08 68.85C224.7 68.85 225.62 68.8 226.85 68.68C228.07 68.57 228.99 68.51 229.59 68.51C229.86 68.52 230 68.74 230 69.15Z"
            fill="#F8F3DE"
          />
          <path
            d="M249.34 55.86C249.34 55.98 249.22 56.05 248.99 56.05C248.12 56.05 246.79 55.97 245 55.83C243.21 55.68 241.88 55.6 240.99 55.6C239.87 55.6 239.22 55.64 239.02 55.72C238.59 55.92 238.37 56.47 238.37 57.39C238.37 58.49 238.65 59.11 239.21 59.26C239.45 59.32 239.8 59.35 240.28 59.35C241.09 59.35 242.3 59.3 243.9 59.22C245.51 59.13 246.72 59.09 247.53 59.09C247.92 59.09 248.11 60.11 248.11 62.14C248.11 63.91 248.04 64.94 247.92 65.23C247.84 65.44 247.68 65.54 247.45 65.54C247.6 65.54 247.23 65.5 246.34 65.42C245.09 65.3 243.19 65.25 240.65 65.25C239.83 65.25 239.37 65.26 239.26 65.27C238.67 65.36 238.37 65.61 238.37 66.02C238.37 67.66 238.44 69.55 238.58 71.69C238.7 73.62 238.75 74.48 238.75 74.27C238.75 74.57 238.38 74.74 237.65 74.79C237.85 74.78 237.33 74.77 236.09 74.77C233.9 74.77 232.49 74.69 231.86 74.55C231.52 74.47 231.35 74.29 231.35 74.01C231.35 72.72 231.39 70.8 231.48 68.22C231.57 65.65 231.61 63.72 231.61 62.43C231.61 60.9 231.54 58.98 231.4 56.67C231.19 53.1 231.08 51.18 231.06 50.91L231.04 50.7C231.03 50.41 231.21 50.26 231.57 50.26C232.44 50.26 233.75 50.28 235.49 50.31C237.24 50.35 238.55 50.36 239.43 50.36C240.36 50.36 241.77 50.29 243.65 50.15C245.53 50.01 246.93 49.94 247.87 49.94C248.45 49.94 248.78 50.18 248.85 50.65C248.85 51.15 248.87 51.89 248.92 52.89C248.94 53.15 249.02 53.64 249.15 54.37C249.28 55.02 249.34 55.51 249.34 55.86Z"
            fill="#F8F3DE"
          />
          <path
            d="M163.23 56.51C162.21 59.95 162.49 63.5 164.06 67.04C165.68 70.7 168.12 73.26 171.33 74.66C174.61 76.1 178.07 76 181.61 74.37C185.07 72.77 187.31 70.2 188.27 66.72C188.33 66.49 188.34 66.35 188.34 66.27C188.17 66.13 187.69 65.77 186.28 64.86C184.84 63.94 184.21 63.57 183.94 63.42C183.87 63.56 183.77 63.77 183.63 64.08C183.21 64.99 182.74 65.76 182.24 66.37C181.46 67.34 180.48 68.1 179.35 68.62C177.41 69.52 175.49 69.48 173.65 68.5C172 67.62 170.72 66.17 169.84 64.19C168.97 62.23 168.76 60.31 169.22 58.48C169.73 56.46 170.97 54.98 172.91 54.09C174.02 53.58 175.22 53.34 176.48 53.4C177.33 53.45 178.22 53.63 179.16 53.93C179.54 54.05 179.78 54.12 179.93 54.16C179.99 53.91 180.12 53.2 180.3 51.26C180.5 49.15 180.47 48.56 180.44 48.41C180.41 48.38 180.33 48.3 180.11 48.21C178.76 47.63 177.35 47.34 175.88 47.34C173.98 47.34 171.99 47.82 169.91 48.78C166.53 50.34 164.28 52.94 163.23 56.51Z"
            fill="#F8F3DE"
          />
          <path
            d="M209.72 68.35C209.6 65.83 209.54 63.94 209.54 62.68C209.54 61.34 209.59 59.33 209.7 56.64C209.81 53.95 209.87 51.95 209.87 50.62C209.87 50.34 209.7 50.21 209.36 50.21C209.01 50.21 208.49 50.23 207.79 50.26C207.09 50.3 206.58 50.31 206.24 50.31C205.89 50.31 205.36 50.29 204.67 50.26C203.97 50.23 203.45 50.21 203.11 50.21C202.82 50.21 202.67 50.39 202.67 50.74C202.67 51.59 202.71 52.85 202.8 54.54C202.88 56.22 202.92 57.48 202.92 58.31C202.92 58.71 202.78 58.95 202.5 59.02C202.1 59.11 200.65 59.16 198.14 59.16C195.45 59.16 193.95 59.12 193.65 59.02C193.43 58.95 193.32 58.71 193.32 58.31C193.32 57.44 193.38 56.14 193.51 54.41C193.64 52.68 193.7 51.38 193.7 50.51C193.7 50.3 193.6 50.2 193.4 50.2C193.03 50.2 192.47 50.22 191.71 50.25C190.95 50.29 190.39 50.3 190.01 50.3C189.64 50.3 189.1 50.28 188.37 50.25C187.64 50.22 187.09 50.2 186.73 50.2C186.48 50.2 186.36 50.32 186.36 50.58C186.36 51.92 186.42 53.94 186.54 56.63C186.65 59.32 186.71 61.34 186.71 62.68C186.71 62.96 186.71 63.27 186.7 63.6C186.79 63.66 186.87 63.71 186.97 63.77C189.34 65.31 189.41 65.47 189.51 65.69C189.66 66.03 189.66 66.46 189.51 67.05C188.91 69.24 187.85 71.1 186.37 72.63C186.36 73.15 186.35 73.62 186.35 74.01C186.35 74.31 186.52 74.49 186.86 74.55C187.29 74.62 188.3 74.66 189.87 74.66C191.7 74.66 192.8 74.62 193.17 74.55C193.49 74.49 193.64 74.29 193.64 73.94C193.64 73.04 193.61 71.69 193.56 69.89C193.5 68.1 193.47 66.74 193.47 65.84C193.47 65.38 193.6 65.12 193.85 65.06C194.26 64.97 195.69 64.92 198.13 64.92C200.57 64.92 201.98 64.97 202.38 65.06C202.64 65.13 202.77 65.39 202.77 65.84C202.77 66.76 202.72 68.13 202.64 69.96C202.55 71.8 202.51 73.17 202.51 74.08C202.51 74.32 202.67 74.48 202.99 74.55C203.31 74.62 204.39 74.66 206.23 74.66C207.53 74.66 208.54 74.62 209.25 74.55C209.53 74.53 209.69 74.5 209.74 74.46C209.84 74.41 209.9 74.25 209.9 74.01C209.91 72.76 209.85 70.87 209.72 68.35Z"
            fill="#F8F3DE"
          />
          <defs>
            <linearGradient
              id="paint0_linear_9_45"
              x1="57.1223"
              y1="58.7378"
              x2="255.226"
              y2="58.7378"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3B2519" />
              <stop offset="0.0299" stop-color="#3F2719" />
              <stop offset="0.2736" stop-color="#5C331B" />
              <stop offset="0.4847" stop-color="#6E3B1D" />
              <stop offset="0.6382" stop-color="#743E1D" />
              <stop offset="0.7421" stop-color="#6F3C1C" />
              <stop offset="0.8624" stop-color="#61351A" />
              <stop offset="0.9905" stop-color="#4A2B17" />
              <stop offset="1" stop-color="#482A17" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_9_45"
              x1="8.83553"
              y1="28.4626"
              x2="66.6589"
              y2="28.4626"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0397" stop-color="#F9F9EC" />
              <stop offset="0.4183" stop-color="#F9F9EC" />
              <stop offset="0.4932" stop-color="#F3F1E2" />
              <stop offset="0.6217" stop-color="#E4DDC6" />
              <stop offset="0.7873" stop-color="#CCBC9A" />
              <stop offset="0.7969" stop-color="#CABA97" />
              <stop offset="1" stop-color="#BAA685" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_9_45"
              x1="20.269"
              y1="49.2016"
              x2="50.9735"
              y2="49.2016"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9F9EC" />
              <stop offset="0.0526" stop-color="#F9F9EC" />
              <stop offset="0.3844" stop-color="#F9F9EC" />
              <stop offset="0.5145" stop-color="#F5F4E5" />
              <stop offset="0.7094" stop-color="#EAE5D0" />
              <stop offset="0.9441" stop-color="#D9CCAF" />
              <stop offset="0.9987" stop-color="#D4C6A6" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_9_45"
              x1="10.1621"
              y1="21.8836"
              x2="15.7323"
              y2="21.8836"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E8DBCA" />
              <stop offset="1" stop-color="#F2ECDE" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_9_45"
              x1="18.402"
              y1="15.8332"
              x2="21.4598"
              y2="20.2955"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ECE1D1" />
              <stop offset="0.4318" stop-color="#EEE6D9" />
              <stop offset="1" stop-color="#EFE9DE" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_9_45"
              x1="26.8084"
              y1="19.2871"
              x2="32.4725"
              y2="19.2871"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ECE1D1" />
              <stop offset="1" stop-color="#EDE4D5" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_9_45"
              x1="48.7244"
              y1="18.9074"
              x2="48.5777"
              y2="26.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BAA68A" />
              <stop offset="1" stop-color="#C7BAA0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_9_45"
              x1="52.0623"
              y1="29.1551"
              x2="62.1189"
              y2="29.1551"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BDAE99" />
              <stop offset="0.2551" stop-color="#BFB19C" />
              <stop offset="1" stop-color="#C2B5A1" />
            </linearGradient>
          </defs>
        </svg>
      )
    case OPTIONS.STRIVER:
      return (
        <svg
          width="45"
          height="26"
          viewBox="0 0 135 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5.89409H15.3693L9.5331 36H21.8368L27.2126 5.89409H42.2511L43.4131 0H1.17165L0 5.89409Z"
            fill="#D41F30"
          ></path>
          <path
            d="M47.2951 0L42.512 26.9438L49.9857 36H82.8746L89.1533 0H77.1198L71.8129 30.008H56.8626L54.4711 27.0927L59.1053 0H47.2951Z"
            fill="#D41F30"
          ></path>
          <path
            d="M86.9282 36H98.7784L100.699 23.9651H130.691L131.882 17.9993H101.825L103.214 8.93625L106.724 5.82379H122.018L120.826 11.9812H132.81L134.929 0H102.156L91.6286 9.00241L86.9282 36Z"
            fill="#D41F30"
          ></path>
        </svg>
      )
  }
}
