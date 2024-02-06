import { FaLocationDot } from "react-icons/fa6";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import "./style/index.css";
import { ContractItem } from "../../components/ContractItem";
import { getcontrats } from "../../services/gets";
const Contract = () => {
  const initialData = async () => {
    const clientId = 1;
    const contracts = await getcontrats(clientId);
  };
  return (
    <>
      <Header />
      <div className="contract-container">
        <div className="container">
          <div className="contract-list-container">
            <div className="contract-list-left">
              <ContractItem />
              <ContractItem />
              <ContractItem />
            </div>
            <div className="contract-list-right">
              <h3>CONTRATO DE COMPRA E VENDA DE IMÓVEL RESIDENCIAL</h3>
              <h5>Vendedor: Nzinga António</h5>
              <div className="house-news-icon">
                <FaLocationDot />
                <p>Rua Miranda, Casa 12</p>
              </div>

              <h5>Comprador: Nzinga António</h5>
              <div className="house-news-icon">
                <FaLocationDot />
                <p>Rua Miranda, Casa 12</p>
              </div>
              <h4>OBJETO DA COMPRA</h4>
              <p>
                O Vendedor concorda em vender e o Comprador concorda em comprar
                o imóvel localizado em [Endereço completo do imóvel], doravante
                denominado "Imóvel".
              </p>
              <h4>PREÇO E FORMA DE PAGAMENTO</h4>
              <p>
                O preço total de compra é [Valor total da compra] (U$ XXXX,XX),
                a ser pago da seguinte forma:
              </p>
              <h4>PRAZO DE ENTREGA</h4>
              <p>
                O Vendedor concorda em entregar o Imóvel ao Comprador até [Data
                de entrega].
              </p>
              <h4>OBRIGAÇÕES DAS PARTES</h4>
              <p>
                O Vendedor se compromete a transferir a propriedade do Imóvel ao
                Comprador mediante o pagamento integral.
              </p>
              <p>
                O Comprador concorda em efetuar os pagamentos conforme acordado
                e em cumprir com todas as obrigações contratuais.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Contract };
