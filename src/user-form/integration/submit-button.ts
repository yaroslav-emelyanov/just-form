import { reflect } from "@effector/reflect";
import { Button } from "../ui/button";
import { submit } from "../model/user-form";

export const SubmitButton = reflect({
    view: Button,
    bind: {
        children: 'Отправить',
        onClick: () => submit()
    }
})