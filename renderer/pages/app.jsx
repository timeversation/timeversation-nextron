import { Application } from 'components/AppUI/Application/Application'
import { Protect } from 'components/Protect/Protect'

export default function Page() {
    return <>
        <Protect onOK={({ router }) => {
            router.push('/app')
        }}>
            <Application></Application>
        </Protect>
    </>
}
