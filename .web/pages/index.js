
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Tecno`}
</Text>
  <Text as={`span`} sx={{"color": "#087ec4"}}>
  {`despegue`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`René Kuhm`} size={`xl`} src={`avatar.png`} sx={{"color": "#C3C7CB", "bg": "#171F26", "padding": "2px", "border": "4px", "borderColor": "#14A1F0"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`René Kuhm`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#14A1F0"}}>
  {`@RenéKuhm`}
</Text>
  <HStack spacing={`1.5em`}>
  <Link as={NextLink} href={`https://github.com/RDesign-Castex`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`GitHub`} src={`icons/github.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Twitter/X`} src={`icons/x.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Instagram`} src={`icons/instagram.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Spotify`} src={`icons/spotify.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/ren%C3%A9-kuhm-1aa88818a/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`LinkedIn`} src={`icons/linkedin.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`13+`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`60+`}
</Text>
  {` aplicaciones creadas`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`1k+`}
</Text>
  {` seguidores`}
</Box>
</Flex>
  <Text sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  {`
            Soy Programador FullStack y actualmente trabajo como Programador
            full-stack developer Desarrollando webs modernas y usando las mejores tecnologias.
            Además, creo contenido formativo sobre programación en redes.
            Aquí podrás encontrar todos mis enlaces de interés ¡Bienvenid@!
            `}
</Text>
</VStack>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Twitch`} src={`icons/twitch.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Transmisiones sobre programación de lunes a viernes`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/channel/UCzrSNHUXJk99T-1dcy_0nSg`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`YouTube`} src={`icons/youtube.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`YouTube`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Tutoriales sobre desarrollo de software semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Discord`} src={`icons/discord.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`El chat y los grupos de estudio de la comunidad`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Retos de programación`} src={`icons/code.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Retos de programación`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Ejercicios semanales para practicar lógica de programación`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Recursos y más`}
</Heading>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Git y GitHub desde cero`} src={`icons/git.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Git y GitHub desde cero`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Aquí puedes comprar mi libro en formato físico y eBook`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Libros recomendados`} src={`icons/book.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Libros recomendados`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi listado de libros sobre programación, ciencia y tecnología`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Mi setup`} src={`icons/setup.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Mi setup`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Listado con todos los elementos que uso en mi trabajo`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://tecnodespegue.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Tecnodespegue`} src={`icons/logo1.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Tecnodespegue`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi sitio web`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Invítame a un café`} src={`icons/coffee.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Invítame a un café`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`¿Quieres ayudarme a que siga creando contenido?`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto:rdesigncastex@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Email`} src={`icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`rdesigncastex@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "paddingX": "2em", "color": "#A3ABB2"}}>
  <ChakraImage alt={`Logotipo de MoureDev. Una "eme" entre llaves.`} src={`logo1.png`} sx={{"height": "4em", "width": "4em"}}/>
  <Link as={NextLink} href={`https://tecnodespegue.com`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "_hover": {}}}>
  <Box>
  {`© 2022-2023 `}
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`René Kuhm FullStack Developer`}
</Text>
  {` v3.`}
</Box>
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {`Programador FullStack ♥ Eduardo Castex (LP).`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`René Kuhm | Te enseño programación y desarrollo de software`}
</title>
  <meta content={`Hola, mi nombre es René Kuhm. Soy programador FullStack, desarrollador full-stack y divulgador.`} name={`description`}/>
  <meta content={`avatar.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
