import { FaLocationDot } from "react-icons/fa6";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import "./style/index.css";
import { ContractItem } from "../../components/ContractItem";
import { getcontrats } from "../../services/gets";
import { useEffect, useState } from "react";
import { IContract } from "../../models/contract/IContract";
const Contract = () => {
  const [contracts, setContracts] = useState<IContract[]>([]);
  const [selectContractIndex, setContractIndex] = useState<number>(0);
  useEffect(() => {
    initialData();
    console.log(selectContractIndex);
  }, [selectContractIndex]);
  const initialData = async () => {
    const clientId = 1;
    const allcontracts = await getcontrats(clientId);
    if (allcontracts) {
      setContracts(allcontracts);
    }
  };
  const selectedContract = contracts[selectContractIndex];
  const selectedProperty = selectedContract?.property;
  const selectedUser = selectedContract?.user;
  const selectedClient = selectedContract?.client;

  return (
    <>
      <Header />
      <div className="contract-container">
        <div className="container">
          <div className="contract-list-container">
            <div className="contract-list-left">
              {contracts?.map((contract, index) => (
                <ContractItem
                  key={`__contract__${contract.id}`}
                  name={contract.user?.name}
                  date={contract.created_at}
                  isSelected={selectContractIndex == index}
                  description={contract.description}
                  onclick={() => {
                    setContractIndex(index);
                  }}
                />
              ))}
            </div>
            <div className="contract-list-right">
              <h3>CONTRATO DE COMPRA E VENDA DE IMÓVEL RESIDENCIAL</h3>
              <h5>
                Vendedor:{" "}
                {`${contracts[selectContractIndex]?.user?.name} ${contracts[selectContractIndex]?.user?.lastname}`}{" "}
              </h5>
              <div className="house-news-icon">
                <FaLocationDot />
                <p>
                  {selectedUser?.address?.province} ,
                  {selectedUser?.address?.county},
                  {selectedUser?.address?.street}` ,
                  {selectedUser?.address?.residenceNumber}
                </p>
              </div>

              <h5>
                Comprador:
                {`${contracts[selectContractIndex]?.client?.name} ${contracts[selectContractIndex]?.client?.lastname}`}
              </h5>
              <div className="house-news-icon">
                <FaLocationDot />
                <p>
                  `{selectedClient?.address?.province} ,
                  {selectedClient?.address?.county},
                  {selectedClient?.address?.street}` ,
                  {selectedClient?.address?.residenceNumber}`
                </p>
              </div>
              <h4>OBJETO DA COMPRA</h4>
              <p>
                {`
                O Vendedor concorda em vender e o Comprador concorda em comprar
                o imóvel localizado em [${selectedProperty?.address?.province}, ${selectedProperty?.address?.county},  ${selectedProperty?.address?.street}, ${selectedProperty?.address?.residenceNumber} ], doravante
                denominado "Imóvel"
               `}
                .
              </p>
              <h4>PREÇO E FORMA DE PAGAMENTO</h4>
              <p>
                O preço total de compra é [Valor total da compra] (U$ $
                {selectedContract?.transaction_price}), a ser pago da seguinte
                forma:
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
