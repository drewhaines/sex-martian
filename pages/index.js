import Head from "next/head";
import Image from "next/image";
import { jsx, Box, Container, Heading, Grid, Text } from "theme-ui";
import { Tweet } from "react-static-tweets";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sex Martian | Greetings Out Now</title>
        <link rel="icon" href="icon.jpeg" />
        <meta
          name="description"
          content="Cowboys by Sex Martian, released 27 December 2020"
        />
        <link rel="shortcut icon" href="icon.jpeg" />
        <link rel="apple-touch-icon" href="icon.jpeg" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="title" content="Cowboys, by Sex Martian" />
        <meta property="og:title" content="Cowboys, by Sex Martian" />
        <meta property="og:type" content="song" />
        <meta property="og:site_name" content="Sex Martian" />
        <meta property="og:description" content=" from the album Greetings " />
        <meta
          property="og:image"
          content="https://f4.bcbits.com/img/a0011030997_5.jpg"
        />
        <link
          rel="image_src"
          href="https://f4.bcbits.com/img/a0011030997_16.jpg"
        />
        <meta
          property="og:url"
          content="https://sexmartian.bandcamp.com/track/cowboys-2"
        ></meta>
      </Head>
      <Box
        sx={{
          bg: "#ffff77",
          py: [2, 10]
        }}
      >
        <Container p={3}>
          <Grid
            sx={{
              gridGap: [0, "100px"],
              justifyContent: "center",
              gridTemplateAreas: [
                `'intro'
                'album'
                'details'`,
                null,
                null,
                `'intro album'
                'details album'`
              ]
            }}
          >
            <Grid mt={[0, 8]} sx={{ gridArea: "intro" }}>
              <Box>
                <Heading
                  variant="h2"
                  mb={2}
                  sx={{ textAlign: "center", color: "black" }}
                >
                  Wat up
                </Heading>
                <Heading
                  variant="h2"
                  mb={2}
                  sx={{ textAlign: "center", color: "black" }}
                >
                  I'm Sex Martian
                </Heading>
                <Heading
                  variant="h2"
                  sx={{ textAlign: "center", color: "black" }}
                >
                  I make super siq music
                </Heading>
              </Box>
            </Grid>
            <Box sx={{ gridArea: "details" }}>
              <Heading
                variant="h1"
                mb={1}
                sx={{ textAlign: "center", fontFamily: "Comic Sans MS" }}
              >
                Greetings
              </Heading>
              <Heading variant="h2" sx={{ textAlign: "center" }}>
                by
              </Heading>
              <Heading
                variant="h1"
                mb={10}
                sx={{ textAlign: "center", fontFamily: "Comic Sans MS" }}
              >
                Sex Martian
              </Heading>
              <Grid variant="centered" mb={5}>
                <a
                  href="https://soundcloud.com/sexmartian/sets/greetings-1"
                  target="blank"
                >
                  <Text
                    sx={{
                      textAlign: "center",
                      bg: "primary",
                      color: "white",
                      px: 10,
                      py: 4,
                      borderRadius: 8,
                      fontFamily: "Lato",
                      "&:hover": {
                        bg: "black"
                      }
                    }}
                  >
                    LISTEN NOW
                  </Text>
                </a>
              </Grid>
            </Box>
            <Box sx={{ gridArea: "album", mt: [6, 0], mb: [3, 0] }}>
              <a
                href="https://soundcloud.com/sexmartian/sets/greetings-1"
                target="blank"
              >
                <Image
                  src="/greetings.jpeg"
                  alt="greetings album cover"
                  width={500}
                  height={500}
                />
              </a>
            </Box>
          </Grid>
          <Grid
            columns={"1fr auto auto auto auto auto 1fr"}
            sx={{ alignItems: "center" }}
            mt={[8, 20]}
            mb={[3]}
          >
            <span />
            <a href="https://soundcloud.com/sexmartian" target="blank">
              <img src="/soundcloud.png" alt="soundcloud link" width={60} />
            </a>
            <a
              href="https://open.spotify.com/album/1oWf56GfEAw8Ol4bBb99mP?si=kxgUjrG2RYm1nVN-Er_9gA&nd=1"
              target="blank"
            >
              <img src="/spotify.png" alt="spotify link" width={38} />
            </a>
            <a href="https://www.instagram.com/sexmartian/" target="blank">
              <img src="/instagram.png" alt="instagram link" width={38} />
            </a>
            <a href="https://twitter.com/sexmartianmusic" target="blank">
              <img src="/twitter.png" alt="twitter link" width={40} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCR8rhEI86L9uhlxzahPwZ2A"
              target="blank"
            >
              <img src="/youtube.png" alt="youtube link" width={40} />
            </a>
            <span />
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "100vh"
        }}
      >
        <Image
          alt="space"
          src="/space.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              pointerEvents: "none"
            }}
          >
            <div class="x">
              <Image
                className="y"
                src="/matt.png"
                alt="matt floating"
                width={200}
                height={200}
              />
            </div>
          </Box>
          <Grid sx={{ justifyContent: "center" }}>
            <Heading
              variant="h1"
              sx={{
                mt: [8, 10],
                mb: [5, 10],
                color: "white",
                textAlign: "center",
                fontFamily: "Comic Sans MS"
              }}
            >
              Tour Dates
            </Heading>
            <Grid
              columns={"1fr 1fr"}
              sx={{
                gridColumnGap: [0, 20],
                gridRowGap: [2, 5],
                px: 3
              }}
            >
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                Mars
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "right",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                4-20-2021
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                San Diego
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "right",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                5-b^2-2021
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                LA
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "right",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                Next blue moon
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                Uranus
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "right",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                Never
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                Seattle
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "right",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                6-10-2021
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                Your City
              </Heading>
              <Heading
                sx={{
                  mb: 5,
                  color: "white",
                  textAlign: "right",
                  fontFamily: "Comic Sans MS",
                  fontSize: [3, 6]
                }}
              >
                One day ...
              </Heading>
            </Grid>
          </Grid>
          <Heading
            sx={{
              mt: [6, 20],
              mb: 5,
              px: 3,
              color: "white",
              textAlign: "center",
              fontFamily: "Comic Sans MS",
              whiteSpace: "pre-wrap",
              fontSize: [3, 6]
            }}
          >
            {
              "Obviously touring is on pause due to COVID. \n\nCheck back for updates."
            }
          </Heading>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          bg: "#bdffa2",
          px: 3
        }}
      >
        <Heading
          sx={{
            mb: [5, 10],
            pt: 10,
            color: "black",
            textAlign: "center",
            fontFamily: "Comic Sans MS",
            fontSize: [4, 6]
          }}
        >
          Who the heck are you?
        </Heading>
        <Heading
          sx={{
            mb: 5,
            pt: 5,
            color: "black",
            textAlign: "center",
            fontFamily: "Comic Sans MS",
            fontSize: [3, 5],
            whiteSpace: "pre-wrap"
          }}
        >
          {"My earthly name is \nMatt Burkeries."}
        </Heading>
        <Grid variant="centered">
          <Box sx={{ maxWidth: 500 }}>
            <img
              src="/matt-car.jpg"
              alt="greetings album cover"
              width={"100%"}
            />
          </Box>
        </Grid>
        <Grid variant="centered" pb={[0, 10]}>
          <Heading
            sx={{
              pb: [2, 5],
              pt: [10, 20],
              color: "black",
              textAlign: "center",
              fontFamily: "Comic Sans MS",
              fontSize: [3, 5],
              maxWidth: "800px"
            }}
          >
            My musics sounds like if Beck, the Strokes, and a martian had a
            baby.
          </Heading>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RkTu9vrIyfM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
        <Heading
          sx={{
            pt: [10, 15],
            mb: [0, 5],
            color: "black",
            textAlign: "center",
            fontFamily: "Comic Sans MS",
            fontSize: [3, 5]
          }}
        >
          I like to party, make music, and get weird.
        </Heading>
        <Grid variant="centered">
          <iframe
            src="https://giphy.com/embed/3ohfFyZvgPqMfMyKC4"
            width="600px"
            height="250"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid variant="centered" pb={10}>
          <Heading
            sx={{
              pb: [0, 5],
              pt: [5, 20],
              color: "black",
              textAlign: "center",
              fontFamily: "Comic Sans MS",
              fontSize: [3, 5],
              maxWidth: "800px",
              whiteSpace: "pre-wrap"
            }}
          >
            {
              "If you don't like it, \nCraig will karate kick the sh*t out of you."
            }
          </Heading>
          <Box sx={{ maxWidth: 500 }}>
            <img src="/craig.png" alt="greetings album cover" width={"100%"} />
          </Box>
        </Grid>
      </Box>
      <Box>
        <Heading
          sx={{
            mb: [5, 10],
            pt: 10,
            color: "black",
            textAlign: "center",
            fontFamily: "Comic Sans MS",
            fontSize: [4, 6]
          }}
        >
          Latest
        </Heading>
        <Box
          sx={{
            px: 3,
            textAlign: "center",
            mx: "auto",
            columnCount: [1, 3],
            columnGap: "15px",
            "& > *": {
              display: "inline-block",
              verticalAlign: "top",
              maxWidth: ["100%", "100%"],
              mb: 2
            }
          }}
        >
          <Tweet id="1377685969420218371" />
          <Tweet id="1376947328616128514" />
          <Tweet id="1376584941228597252" />
          <Tweet id="1372236286451449857" />
          <Tweet id="1375860165069578240" />

          <Tweet id="1375497777350852613" />
        </Box>
        <Heading
          sx={{
            px: 3,
            pb: 5,
            pt: [5, 15],
            mx: "auto",
            color: "black",
            textAlign: "center",
            fontFamily: "Comic Sans MS",
            fontSize: [3, 2],
            maxWidth: "800px",
            whiteSpace: "pre-wrap"
          }}
        >
          {`Sex Martian ${new Date().getFullYear()}\n\nAll rights are reserved by me, myself, and the guy who made this website.`}
        </Heading>
      </Box>
    </div>
  );
}
