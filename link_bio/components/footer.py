import reflex as rx
import datetime
import link_bio.constants as const
from link_bio.styles.styles import Size
from link_bio.styles.colors import Color, TextColor


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="logo1.png",
            height=Size.VERY_BIG.value,
            width=Size.VERY_BIG.value,
            alt="Logotipo de MoureDev. Una \"eme\" entre llaves."
        ),
        rx.link(
            rx.box(
                f"© 2022-{datetime.date.today().year} ",
                rx.span("René Kuhm FullStack Developer", color=Color.PRIMARY.value),
                " v3."
            ),
            href=const.RENE_URL,
            is_external=True,
            font_size=Size.MEDIUM.value
        ),
        rx.text(
            "Programador FullStack ♥ Eduardo Castex (LP).",
            font_size=Size.MEDIUM.value,
            margin_top=Size.ZERO.value
        ),
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.BIG.value,
        padding_x=Size.BIG.value,
        spacing=Size.DEFAULT.value,
        color=TextColor.FOOTER.value
    )
