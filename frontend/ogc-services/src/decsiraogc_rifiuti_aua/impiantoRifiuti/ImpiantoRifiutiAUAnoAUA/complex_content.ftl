<table class="featureInfo">
  <caption class="featureInfo">Impianti Gestione Rifiuti: Recupero (AUA o Comunicazioni fuori AUA)</caption>
  <#list features as feature>
    <tr>
	  <th>Comune</th>
	  <th>Provincia</th>
	  <th>Codice Sira</th>
	  <th>Tipologia impiantistica</th>
	  <th>Operazioni di recupero</th>
	  <th>Quantità totale inviata a recupero (t)</th>
	  <th>Capacità massima stoccata (t)</th>
	  <th>Capacità massima stoccata (mc)</th>
    </tr>
    <tr>
	  <td>${feature.desComune.value}</td>
	  <td>${feature.desProvincia.value}</td>
	  <td>${feature.codiceSira.value}</td>
	  <td>${feature.elencoTipologiaImpRifiuto.value}</td>
	  <td>${feature.elencoOperazioniRecupero.value}</td>
	  <td>${feature.quantitaInviataTotaleRecupero.value}</td>
	  <td>${feature.capacitaMaxStocct.value}</td>
	  <td>${feature.capacitaMaxStoccMc.value}</td>
    </tr>
  </#list>
</table>