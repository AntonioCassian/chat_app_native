import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Logo(props) {
  return (
    <Svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#3B82F6" d="M0 0H120V120H0z" />
      <Path
        d="M43.092 59.72c-1.317 0-2.288-.381-2.912-1.144-.555-.763-.832-1.768-.832-3.016 0-.416.104-1.144.312-2.184.208-1.11.485-2.288.832-3.536.416-1.248.832-2.323 1.248-3.224.485-.901.97-1.352 1.456-1.352.139-.763.416-1.733.832-2.912.485-1.179 1.075-2.045 1.768-2.6l.624-.208v-.208l1.04-1.144c.208-.277.312-.381.312-.312h.104c0-.624.104-1.248.312-1.872a4.209 4.209 0 001.664-1.976l.104-.728h.208l2.184-4.368v-.104c0-.347.139-.59.416-.728.347-.208.45-.45.312-.728.555-.97 1.421-2.288 2.6-3.952a497.123 497.123 0 013.952-5.408 227.435 227.435 0 014.16-5.2c1.317-1.595 2.392-2.739 3.224-3.432l.52-.208.728-1.456a10.88 10.88 0 001.768-.624 4.01 4.01 0 011.976-.52c.624 0 1.387.173 2.288.52.97.277 1.803.693 2.496 1.248.693.555 1.005 1.213.936 1.976l-.104.936-.104.208a8.795 8.795 0 01-2.496 2.808c-.624 2.08-1.768 4.264-3.432 6.552a68.801 68.801 0 01-5.616 6.552 120.602 120.602 0 01-6.136 5.928 263.98 263.98 0 01-5.096 4.472c-1.317 1.179-2.045 1.941-2.184 2.288-.416.07-1.04.416-1.872 1.04a18.38 18.38 0 00-2.184 1.872c-.624.693-.936 1.213-.936 1.56l-.416.936c-1.941 1.179-3.363 2.773-4.264 4.784a16.43 16.43 0 00-1.248 6.344c0 .97.243 1.595.728 1.872.485.277.763.693.832 1.248h-.104zm8.424-21.216c.97-.763 2.323-1.872 4.056-3.328a165.359 165.359 0 005.512-5.096 73.774 73.774 0 005.616-5.824c1.803-2.01 3.259-3.917 4.368-5.72 1.11-1.803 1.664-3.363 1.664-4.68 0-.139-.07-.312-.208-.52a3.218 3.218 0 00-.208-.624h-.104c-.416 0-1.213.555-2.392 1.664-1.11 1.04-2.461 2.461-4.056 4.264a159.557 159.557 0 00-4.784 5.72 158.092 158.092 0 00-4.68 5.928c-1.387 1.941-2.53 3.64-3.432 5.096-.901 1.456-1.352 2.496-1.352 3.12zm3.933 36.816c-1.248 0-2.496-.381-3.744-1.144a10.436 10.436 0 01-3.12-2.912c-.901-1.179-1.352-2.392-1.352-3.64l.312-.624a7.924 7.924 0 011.56 2.496c.347.901.832 1.63 1.456 2.184.555.624 1.56.936 3.016.936.278 0 .555-.035.832-.104l.832-.208c.624.208 1.56-.173 2.808-1.144 1.318-.97 2.635-2.219 3.952-3.744 1.387-1.456 2.566-2.912 3.536-4.368 1.04-1.387 1.595-2.392 1.664-3.016a77.029 77.029 0 003.12-5.096 334.81 334.81 0 012.912-5.096l.104-1.352.936-.52-.208-.104.208-.936-.208-.728a3.96 3.96 0 01-1.04.728 3.684 3.684 0 00-1.144.624l-.104.936c-.97.208-1.941.693-2.912 1.456l-2.704 2.08c-.901.624-1.872.936-2.912.936-.485 0-1.11-.035-1.872-.104-.693-.139-1.213-.347-1.56-.624-.901-.208-1.56-.45-1.976-.728-.416-.347-.693-.97-.832-1.872l.416-1.352-.312-.832c.347-1.04.59-1.803.728-2.288.208-.485.486-.901.832-1.248.416-.416 1.075-.97 1.976-1.664.07-.347.243-.59.52-.728.347-.208.659-.347.936-.416l.104-.52 1.04-1.248.312.208.624-.936c.486-.347.97-.555 1.456-.624a6.12 6.12 0 001.56-.624c.139-.763.59-1.213 1.352-1.352.832-.208 1.318-.59 1.456-1.144h.416l1.768-1.144.624.312 1.456-.936c.416 0 .798-.035 1.144-.104.416-.07.798-.104 1.144-.104l.416.208c-1.386.485-2.981 1.283-4.784 2.392a37.051 37.051 0 00-5.304 3.744c-1.664 1.387-3.05 2.912-4.16 4.576-1.11 1.664-1.664 3.328-1.664 4.992 0 1.317.694 1.976 2.08 1.976 1.248 0 2.53-.381 3.848-1.144a16.537 16.537 0 003.744-2.808c1.11-1.11 1.907-2.184 2.392-3.224l1.768-1.456.936-1.456c.486-.07.832-.485 1.04-1.248.208-.763.416-1.595.624-2.496.278-.97.694-1.803 1.248-2.496.624-.693 1.526-1.04 2.704-1.04.624 0 1.248.173 1.872.52.624.347.936.901.936 1.664 0 .347-.277 1.179-.832 2.496-.485 1.317-1.144 2.877-1.976 4.68a191.9 191.9 0 01-2.6 5.408 95.675 95.675 0 01-2.392 4.68c-.693 1.317-1.178 2.15-1.456 2.496-.07.416-.208 1.005-.416 1.768-.138.832-.416 1.317-.832 1.456a43.31 43.31 0 01-3.64 5.408 100.945 100.945 0 00-3.848 5.2l-1.872.832c-.208.277-.45.555-.728.832-.208.277-.485.52-.832.728l-.312-.104c-.97 1.11-2.01 2.01-3.12 2.704-1.04.763-2.357 1.144-3.952 1.144zM23.069 103.608l1.368-.204 1.308-.384.312-.504-.132-.516-.312-.384a3.075 3.075 0 00-.276-.156.934.934 0 00-.276-.12.642.642 0 00-.276-.036.488.488 0 00-.264.084l-.3.216-.996-.468-.36-.924.312-1.548.552-.732c.024.056.072.076.144.06a.725.725 0 00.396-.264c.048-.072.06-.136.036-.192.136-.04.292-.08.468-.12a1.49 1.49 0 00.456-.204l1.548-.324.252-.024.216.252-.192.516-.444.12-.576.06-.876.444-.408.528a.536.536 0 00-.192.396c.008.136.044.284.108.444.088.184.152.304.192.36a.806.806 0 00.18.132l.708.24c.08.064.152.116.216.156a.755.755 0 00.24.06c.088.008.212.016.372.024.168.008.38.02.636.036a1.7 1.7 0 00.252.36c.096.096.188.224.276.384l.24.54-.36 1.2-.288.312-.588.852h-.3c-.104 0-.232.004-.384.012h-.516c-.2 0-.376.02-.528.06-.152.04-.288.084-.408.132-.12.04-.224.076-.312.108a.533.533 0 01-.24.036l-.432-.132-.72.12-.252-.516.072-.3.348-.192zm11.328-3.108c.024.136.036.256.036.36 0 .096-.004.192-.012.288 0 .088.004.176.012.264.016.08.048.168.096.264a2.345 2.345 0 01-.12.192.934.934 0 00-.12.276l-.036.204a.399.399 0 01-.024.096c.024.016.044.048.06.096.008.04 0 .092-.024.156a1.54 1.54 0 01-.144.24c-.144.192-.224.356-.24.492a.697.697 0 01-.096.3.57.57 0 01-.156.072c-.08.032-.176.072-.288.12-.112.04-.224.088-.336.144a1.26 1.26 0 00-.264.168 1.95 1.95 0 00-.36.096c-.104.04-.232.068-.384.084a5.279 5.279 0 00-.444.12c-.152.04-.236.06-.252.06-.376 0-.6.012-.672.036a.65.65 0 01-.228.036l-1.092-.396-.504-.732a3.98 3.98 0 00-.024-.48 3.358 3.358 0 00-.036-.348 4.709 4.709 0 01-.036-.288 1.871 1.871 0 010-.3.867.867 0 00.108-.168c.048-.096.096-.204.144-.324.056-.12.108-.244.156-.372.056-.128.096-.236.12-.324.064-.184.112-.344.144-.48.032-.144.056-.272.072-.384a.647.647 0 00.156-.132.849.849 0 01.12-.12c.328-.192.612-.348.852-.468.24-.128.464-.208.672-.24l.36-.024a2.345 2.345 0 01.204.048c.048.016.092.028.132.036h.072l.24.372a.318.318 0 01-.048.18c-.032.04 0 .068.096.084a.77.77 0 01.168.048v.012c.128 0 .26-.028.396-.084a.951.951 0 01.408-.096.55.55 0 01.168.048c.08.024.164.056.252.096s.168.08.24.12c.08.032.136.056.168.072-.016.12-.012.204.012.252a.254.254 0 00.096.108c.04.016.076.032.108.048.04.008.064.032.072.072zm-2.148 3c.12-.08.236-.336.348-.768.064-.232.116-.404.156-.516a.909.909 0 00.072-.336c0-.176-.06-.384-.18-.624a3.191 3.191 0 01-.144-.324 1.62 1.62 0 01-.072-.264.18.18 0 01-.108-.144.327.327 0 00-.096-.216c-.08-.064-.128-.088-.144-.072-.016.016-.032.024-.048.024h-.108c-.064 0-.152.012-.264.036a.42.42 0 00-.252.168 3.71 3.71 0 01-.252.252.614.614 0 00-.108.108c-.08.152-.152.284-.216.396l-.156.252-.108.252c-.048.12-.068.28-.06.48a.878.878 0 01.048.216c.016.104-.032.216-.144.336a.39.39 0 00-.072.144.879.879 0 00-.048.228.74.74 0 00.024.264.488.488 0 00.18.228c.112.08.228.16.348.24.12.072.196.108.228.108h.132c.048 0 .092.012.132.036l.912-.504zm8.677-3c.024.136.036.256.036.36 0 .096-.004.192-.012.288 0 .088.004.176.012.264.016.08.048.168.096.264a2.345 2.345 0 01-.12.192.934.934 0 00-.12.276l-.036.204a.399.399 0 01-.024.096c.024.016.044.048.06.096.008.04 0 .092-.024.156a1.54 1.54 0 01-.144.24c-.144.192-.224.356-.24.492a.697.697 0 01-.096.3.57.57 0 01-.156.072c-.08.032-.176.072-.288.12-.112.04-.224.088-.336.144a1.26 1.26 0 00-.264.168 1.95 1.95 0 00-.36.096c-.104.04-.232.068-.384.084a5.279 5.279 0 00-.444.12c-.152.04-.236.06-.252.06-.376 0-.6.012-.672.036a.65.65 0 01-.228.036l-1.092-.396-.504-.732a3.98 3.98 0 00-.024-.48 3.358 3.358 0 00-.036-.348 4.709 4.709 0 01-.036-.288 1.871 1.871 0 010-.3.867.867 0 00.108-.168c.048-.096.096-.204.144-.324.056-.12.108-.244.156-.372.056-.128.096-.236.12-.324.064-.184.112-.344.144-.48.032-.144.056-.272.072-.384a.647.647 0 00.156-.132.849.849 0 01.12-.12c.328-.192.612-.348.852-.468.24-.128.464-.208.672-.24l.36-.024.108.024.096.024c.048.016.092.028.132.036h.072l.24.372a.318.318 0 01-.048.18c-.032.04 0 .068.096.084a.77.77 0 01.168.048v.012c.128 0 .26-.028.396-.084a.951.951 0 01.408-.096.55.55 0 01.168.048c.08.024.164.056.252.096s.168.08.24.12c.08.032.136.056.168.072-.016.12-.012.204.012.252a.254.254 0 00.096.108c.04.016.076.032.108.048.04.008.064.032.072.072zm-2.148 3c.12-.08.236-.336.348-.768.064-.232.116-.404.156-.516a.909.909 0 00.072-.336c0-.176-.06-.384-.18-.624a3.191 3.191 0 01-.144-.324 1.62 1.62 0 01-.072-.264.18.18 0 01-.108-.144.327.327 0 00-.096-.216c-.08-.064-.128-.088-.144-.072-.016.016-.032.024-.048.024h-.108c-.064 0-.152.012-.264.036a.42.42 0 00-.252.168 3.71 3.71 0 01-.252.252.614.614 0 00-.108.108c-.08.152-.152.284-.216.396l-.156.252-.108.252c-.048.12-.068.28-.06.48a.878.878 0 01.048.216c.016.104-.032.216-.144.336a.39.39 0 00-.072.144.879.879 0 00-.048.228.74.74 0 00.024.264.488.488 0 00.18.228c.112.08.228.16.348.24.12.072.196.108.228.108h.132c.048 0 .092.012.132.036l.912-.504zm4.694 1.248c-.024 0-.076.004-.156.012-.072 0-.152.004-.24.012-.088 0-.172.004-.252.012h-.168l-.264.024-.204-.144c-.008-.12 0-.26.024-.42a2.04 2.04 0 00.048-.372c.096 0 .116-.096.06-.288-.064-.192-.088-.344-.072-.456.008-.128.028-.256.06-.384.032-.136.036-.224.012-.264a2.023 2.023 0 00-.06-.156 1.397 1.397 0 01-.06-.216l.144-.78c0-.432.004-.764.012-.996l.036-.516a.663.663 0 01.048-.204.312.312 0 00.048-.084c.016-.024.024-.064.024-.12a2.208 2.208 0 000-.336l.252-.132c.136.008.3.032.492.072.2.032.392.068.576.108.096.016.18.032.252.048.072.008.136.02.192.036l.168.228-.3.204c-.048.032-.052.1-.012.204.144.128.268.168.372.12a.4.4 0 00.228-.228l.78-.192h.456l.204.072c.192.064.384.132.576.204.2.072.364.128.492.168l.216.528-.012.144c.016.232.028.456.036.672.016.208.016.464 0 .768a353.793 353.793 0 00-.048 1.14v.756c0 .008.008.04.024.096.024.056.056.116.096.18l-.084.132-.228.108a4.184 4.184 0 00-.432.06 2.321 2.321 0 01-.42.048.163.163 0 01-.12-.048c-.032-.04-.104-.056-.216-.048l-.168-.144a.89.89 0 00-.024-.432 1.51 1.51 0 00-.048-.144.321.321 0 01-.024-.12c.008-.12.02-.252.036-.396.016-.112.032-.24.048-.384.024-.152.052-.3.084-.444.016-.088.024-.2.024-.336v-.42-.408c0-.128.004-.224.012-.288l-.348-.612-.096-.024a.851.851 0 01-.108-.036.316.316 0 00-.192.012 1.645 1.645 0 00-.168.084 2.666 2.666 0 00-.156.096.243.243 0 01-.132.048c0 .024-.044.004-.132-.06a2.446 2.446 0 01-.204-.204c-.136-.112-.236-.132-.3-.06a.815.815 0 00-.144.264c.008.088.02.148.036.18a.305.305 0 00.072.072.15.15 0 00.084 0c-.04.032-.072.092-.096.18-.024.08-.044.172-.06.276a3.77 3.77 0 00-.012.312c.008.104.02.2.036.288.016.096.004.264-.036.504a4.56 4.56 0 00-.024.828c0 .12-.004.248-.012.384l-.024.384-.024.336a2.901 2.901 0 00-.012.228v.036a.947.947 0 01-.468.228zm13.744-.672l-1.68.204-.348-.564c0-.104-.08-.1-.24.012a.424.424 0 00-.12.12l-.12.168-.072.096a1.265 1.265 0 00-.072.108 1.975 1.975 0 01-.768.36c-.256.056-.476.02-.66-.108-.136-.016-.228-.048-.276-.096a.703.703 0 01-.096-.084l-.768-.048-.324-.156-.3-.756.06-.252-.264-1.056.504-.84.408-.372c.152-.08.328-.144.528-.192.2-.048.4-.08.6-.096.2-.024.392-.028.576-.012a1.7 1.7 0 01.456.072c0 .128.04.212.12.252.08.04.236.084.468.132.08-.136.12-.3.12-.492 0-.2-.036-.408-.108-.624l-.192-.612a11.322 11.322 0 01-.3-.12 9.997 9.997 0 00-.324-.156l-.516.084-.528.108-.12-.192.132-.312.084-.192.168-.036.552-.096.492.168.54-.084 1.044.312.444.672.156 1.908-.036.6.264 1.404.156.072h.372l.156.42-.168.276zm-4.404-1.956c-.04.208-.04.384 0 .528a.843.843 0 00.228.36l.18.372c.144.048.28.084.408.108.128.024.26.028.396.012.144-.024.292-.068.444-.132a4.15 4.15 0 00.552-.312l.024-.612-.216-1.068a.905.905 0 00-.54-.036 2.866 2.866 0 01-.336.06c-.128.016-.26.036-.396.06-.128.016-.248.04-.36.072a.467.467 0 00-.228.108l-.156.48zm6.451 2.628c-.024 0-.076.004-.156.012-.072 0-.152.004-.24.012-.088 0-.172.004-.252.012h-.168l-.264.024-.204-.144c-.008-.12 0-.26.024-.42a2.04 2.04 0 00.048-.372c.096 0 .116-.096.06-.288-.064-.192-.088-.344-.072-.456.008-.128.028-.256.06-.384.032-.136.036-.224.012-.264a2.023 2.023 0 00-.06-.156 1.397 1.397 0 01-.06-.216l.144-.78c0-.432.004-.764.012-.996l.036-.516a.663.663 0 01.048-.204.312.312 0 00.048-.084c.016-.024.024-.064.024-.12a2.208 2.208 0 000-.336l.252-.132c.136.008.3.032.492.072.2.032.392.068.576.108.096.016.18.032.252.048.072.008.136.02.192.036l.168.228-.3.204c-.048.032-.052.1-.012.204.144.128.268.168.372.12a.4.4 0 00.228-.228l.78-.192h.456l.204.072c.192.064.384.132.576.204.2.072.364.128.492.168l.216.528-.012.144c.016.232.028.456.036.672.016.208.016.464 0 .768a353.793 353.793 0 00-.048 1.14v.756c0 .008.008.04.024.096.024.056.056.116.096.18l-.084.132-.228.108a4.184 4.184 0 00-.432.06 2.321 2.321 0 01-.42.048.163.163 0 01-.12-.048c-.032-.04-.104-.056-.216-.048l-.168-.144a.89.89 0 00-.024-.432 1.51 1.51 0 00-.048-.144.321.321 0 01-.024-.12c.008-.12.02-.252.036-.396.016-.112.032-.24.048-.384.024-.152.052-.3.084-.444.016-.088.024-.2.024-.336v-.42-.408c0-.128.004-.224.012-.288l-.348-.612-.096-.024a.851.851 0 01-.108-.036.316.316 0 00-.192.012 1.645 1.645 0 00-.168.084 2.666 2.666 0 00-.156.096.243.243 0 01-.132.048c0 .024-.044.004-.132-.06a2.446 2.446 0 01-.204-.204c-.136-.112-.236-.132-.3-.06a.815.815 0 00-.144.264c.008.088.02.148.036.18a.305.305 0 00.072.072.15.15 0 00.084 0c-.04.032-.072.092-.096.18-.024.08-.044.172-.06.276a3.77 3.77 0 00-.012.312c.008.104.02.2.036.288.016.096.004.264-.036.504a4.56 4.56 0 00-.024.828c0 .12-.004.248-.012.384l-.024.384-.024.336a2.901 2.901 0 00-.012.228v.036a.947.947 0 01-.468.228zm10.814-5.4l.924.18-.192.468v.036c.008.072-.036.312-.132.72-.008.024-.044.06-.108.108a7.958 7.958 0 01-.204.168 5.06 5.06 0 00-.216.204.503.503 0 00-.144.192l-1.74 2.664-.36.36a.303.303 0 00-.072.036.107.107 0 01-.048.012l.108.156-.564.852-.732.96-.18.252-1.416-.072-.216-.612.408-.108.288-.3.216-.156v-.3a.32.32 0 00.084-.06.63.63 0 00.096-.06c.048-.04.1-.088.156-.144.056-.056.108-.124.156-.204.176-.312.18-.468.012-.468.064-.048.108-.084.132-.108a.58.58 0 00.156-.312c.032-.248.016-.408-.048-.48-.04-.008-.128-.092-.264-.252-.072-.08-.132-.148-.18-.204a.446.446 0 00-.12-.108 2.85 2.85 0 00-.216-.456 5.563 5.563 0 00-.3-.504 11.222 11.222 0 00-.324-.516l-.312-.468c-.288-.432-.54-.724-.756-.876l-.084-.324a.558.558 0 01.36-.18c.16-.016.272-.072.336-.168l.684-.216c.144.08.276.172.396.276.168.152.34.256.516.312a.43.43 0 00.096.276c.064.08.136.156.216.228l.228.18c.08.056.136.112.168.168 0 .008.004.036.012.084.016.04.024.084.024.132a.365.365 0 010 .132c0 .032-.012.048-.036.048-.04 0-.036.02.012.06.048.04.14.092.276.156 0 .024.016.068.048.132.04.064.088.136.144.216.056.08.112.164.168.252a1.875 1.875 0 01.324.708c.032.144.06.224.084.24a.393.393 0 00.096-.024c.048-.024.1-.048.156-.072a.677.677 0 00.144-.108.225.225 0 00.06-.144.163.163 0 00-.048-.12l-.084-.108a1.63 1.63 0 01-.06-.108.102.102 0 010-.096c.088-.072.152-.132.192-.18l.156-.216a.418.418 0 01.096-.132c.056-.056.112-.108.168-.156.064-.048.12-.088.168-.12.048-.04.072-.064.072-.072a2.85 2.85 0 00.156-.372c.04-.128.092-.308.156-.54a.283.283 0 01.06-.12 3.113 3.113 0 01.24-.204c.04-.032.064-.06.072-.084l.012-.024c0-.008.004-.02.012-.036l.312-.276zm9.218.276v.444l-.072.072-1.092-.228-.96.444-.264.612c-.24.48-.416.916-.528 1.308-.112.384-.1.712.036.984l.348.6 1.26-.216.528-.18h.984l.12.42-1.344.384-1.896.396-.576-.372h-.984l-.372-.408a2.985 2.985 0 01.036-1.38 7.4 7.4 0 01.54-1.44l1.344-.972.336-.576.384-.144.264-.216 1.824.228.084.24zm2.53 5.292c-.056 0-.156.008-.3.024a5.683 5.683 0 01-.3.012l-.264.024-.204-.144c-.008-.12 0-.26.024-.42a2.04 2.04 0 00.048-.372c.096 0 .116-.096.06-.288-.064-.192-.088-.344-.072-.456a1.17 1.17 0 01.06-.324c.032-.096.036-.164.012-.204a2.023 2.023 0 00-.06-.156 1.397 1.397 0 01-.06-.216l.144-.78a1.96 1.96 0 00.06-.396c.008-.144.012-.288.012-.432.008-.152.02-.3.036-.444.016-.152.048-.296.096-.432l.012-.312a.212.212 0 01.06-.096l.084-.084a.582.582 0 00.072-.084c.024-.032.024-.068 0-.108a.233.233 0 00-.084-.228.35.35 0 00-.216-.108.819.819 0 00.072-.288c.024-.144.04-.304.048-.48.016-.176.024-.36.024-.552.008-.192.012-.368.012-.528l.252-.132c.136.008.264.032.384.072.128.032.284.068.468.108.096.016.18.032.252.048.072.008.136.02.192.036l.168.228a.36.36 0 01-.012.06.395.395 0 01-.012.096.395.395 0 01-.012.096c0 .024-.004.036-.012.036-.048-.008-.068.064-.06.216v1.2a.563.563 0 00-.12.192c-.032.072-.06.156-.084.252l-.072.3-.048.276c.144.128.268.168.372.12a.4.4 0 00.228-.228l.708.048h.456l.204.072c.192.064.364.132.516.204.16.072.304.128.432.168l.216.528-.012.144c-.008.008.012.108.06.3.048.184.064.468.048.852a60.784 60.784 0 00-.048 1.776c0 .008.008.04.024.096.024.056.056.116.096.18l-.084.132-.228.108a2.378 2.378 0 00-.372.06 1.488 1.488 0 01-.36.048.163.163 0 01-.12-.048c-.032-.04-.104-.056-.216-.048l-.168-.144a.89.89 0 00-.024-.432 1.51 1.51 0 00-.048-.144.321.321 0 01-.024-.12c.008-.056.012-.108.012-.156l.024-.18c.016-.104.032-.22.048-.348.024-.128.052-.268.084-.42a1.76 1.76 0 00.024-.492 2.55 2.55 0 01.012-.432l-.42-.852-.096-.024a.851.851 0 01-.108-.036.784.784 0 00-.324-.024l-.252.024c0 .024-.044.004-.132-.06a2.446 2.446 0 01-.204-.204c-.136-.112-.236-.132-.3-.06a.815.815 0 00-.144.264c.008.088.02.148.036.18a.305.305 0 00.072.072.15.15 0 00.084 0c-.04.032-.072.092-.096.18-.024.08-.044.172-.06.276a3.77 3.77 0 00-.012.312c.008.104.02.2.036.288.016.096.004.244-.036.444-.032.2-.04.456-.024.768 0 .12-.004.248-.012.384l-.024.384-.024.336a2.901 2.901 0 00-.012.228v.036a.947.947 0 01-.468.228zm10.76-.84l-1.68.204-.348-.564c0-.104-.08-.1-.24.012a.424.424 0 00-.12.12l-.12.168-.072.096a1.265 1.265 0 00-.072.108 1.975 1.975 0 01-.768.36c-.256.056-.476.02-.66-.108-.136-.016-.228-.048-.276-.096a.703.703 0 01-.096-.084l-.768-.048-.324-.156-.3-.756.06-.252-.264-1.056.504-.84.408-.372c.152-.08.328-.144.528-.192.2-.048.4-.08.6-.096.2-.024.392-.028.576-.012a1.7 1.7 0 01.456.072c0 .128.04.212.12.252.08.04.236.084.468.132.08-.136.12-.3.12-.492 0-.2-.036-.408-.108-.624l-.192-.612a11.322 11.322 0 01-.3-.12 9.997 9.997 0 00-.324-.156l-.516.084-.528.108-.12-.192.132-.312.084-.192.168-.036.552-.096.492.168.54-.084 1.044.312.444.672.156 1.908-.036.6.264 1.404.156.072h.372l.156.42-.168.276zm-4.404-1.956c-.04.208-.04.384 0 .528a.843.843 0 00.228.36l.18.372c.144.048.28.084.408.108.128.024.26.028.396.012.144-.024.292-.068.444-.132a4.15 4.15 0 00.552-.312l.024-.612-.216-1.068a.905.905 0 00-.54-.036 2.866 2.866 0 01-.336.06c-.128.016-.26.036-.396.06-.128.016-.248.04-.36.072a.467.467 0 00-.228.108l-.156.48zm4.639-1.764a1.545 1.545 0 01-.072-.348 8.314 8.314 0 00-.048-.384l.228-.432c.144-.024.244-.032.3-.024.064.008.112.02.144.036.048-.008.116-.016.204-.024l.432-.072c.016-.136.044-.288.084-.456.04-.168.068-.356.084-.564l-.168-.168-.012-.18.132-.312h1.44l.54.024c.056.064.08.14.072.228-.008.08-.024.156-.048.228a1.397 1.397 0 01-.072.18c-.016.04-.012.052.012.036v.744a.38.38 0 00-.108.144.822.822 0 00-.06.168l.024.024.696-.024.072.024c.024.008.052.016.084.024.096.024.22.036.372.036l.108.12-.132.576c-.048 0-.112.008-.192.024-.08.008-.164.02-.252.036l-.228.024a1.277 1.277 0 01-.132.012l-.504.144a2.357 2.357 0 00-.072.228 1.187 1.187 0 00-.012.168v.168c.008.056.012.128.012.216l-.084 1.524c-.024.136-.032.26-.024.372a2 2 0 00.06.288l.048.12.048.12.108.312.048.06 1.164-.36.444-.108.264.24-.288.384-.276.144-.24.048-1.38.612a.312.312 0 01-.096-.012H95.4a4.222 4.222 0 00-.168-.024c-.288-.024-.504-.016-.648.024 0-.224-.088-.376-.264-.456a4.743 4.743 0 00-.24-.144 1.338 1.338 0 00-.18-.096v-.276a.446.446 0 00-.024-.192.768.768 0 01-.012-.264c.008-.144.016-.324.024-.54a1.861 1.861 0 00-.024-.54c-.032-.144-.08-.216-.144-.216.008-.104.012-.208.012-.312.008-.104.016-.196.024-.276a.674.674 0 00.012-.132v-.132l.036-.072a.13.13 0 01.024-.048c.008-.016.044-.036.108-.06.072-.032.136-.116.192-.252.184-.128.264-.244.24-.348-.024-.104-.164-.176-.42-.216a.382.382 0 00-.144.048c-.032.016-.048.06-.048.132l-.72.156-.216-.132z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Logo