import reflex as rx
import datetime
import link_bio.constants as const
from link_bio.styles.styles import Size
from link_bio.styles.colors import Color, TextColor
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                name="René Kuhm",
                size="xl",
                src="avatar.png",
                color=TextColor.BODY.value,
                bg=Color.CONTENT.value,
                padding="2px",
                border="4px",
                border_color=Color.PRIMARY.value
            ),
            rx.vstack(
                rx.heading(
                    "René Kuhm",
                    size="lg"
                ),
                rx.text(
                    "@RenéKuhm",
                    margin_top=Size.ZERO.value,
                    color=Color.PRIMARY.value
                ),
                rx.hstack(
                    link_icon(
                        "icons/github.svg",
                        const.GITHUB_URL,
                        "GitHub"
                    ),
                    link_icon(
                        "icons/x.svg",
                        const.TWITTER_X_URL,
                        "Twitter/X"
                    ),
                    link_icon(
                        "icons/instagram.svg",
                        const.INSTAGRAM_URL,
                        "Instagram"
                    ),
                    link_icon(
                        "icons/spotify.svg",
                        const.SPOTIFY_URL,
                        "Spotify"
                    ),
                    link_icon(
                        "icons/linkedin.svg",
                        const.LINKEDIN_URL,
                        "LinkedIn"
                    ),
                    spacing=Size.LARGE.value
                ),
                align_items="start"
            ),
            spacing=Size.DEFAULT.value
        ),
        rx.flex(
            info_text(
                f"{experience()}+",
                "años de experiencia"
            ),
            rx.spacer(),
            info_text(
                "60+", "aplicaciones creadas"
            ),
            rx.spacer(),
            info_text(
                "1k+", "seguidores"
            ),
            width="100%"
        ),
        rx.text(
            f"""
            Soy Programador FullStack y actualmente trabajo como Programador
            full-stack developer Desarrollando webs modernas y usando las mejores tecnologias.
            Además, creo contenido formativo sobre programación en redes.
            Aquí podrás encontrar todos mis enlaces de interés ¡Bienvenid@!
            """,
            font_size=Size.DEFAULT.value,
            color=TextColor.BODY.value
        ),
        spacing=Size.BIG.value,
        align_items="start"
    )


def experience() -> int:
    return datetime.date.today().year - 2022
