import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Siderbar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Charles Magno Eickel Barel</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Charles-Magno-Eickel-Barel
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Web
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Siderbar
