import reflex as rx
import link_bio.constants as const
from link_bio.styles.styles import Size
from link_bio.components.title import title
from link_bio.components.link_sponsor import link_sponsor


def sponsors() -> rx.Component:
    return rx.vstack(
        title("Colaboran"),
        rx.responsive_grid(
            link_sponsor(
            
            ),
            link_sponsor(
            
            ),
            spacing=Size.BIG.value,
            columns=[1, 2]
        ),
        width="100%",
        align_items="start",
        spacing=Size.MEDIUM.value
    )
