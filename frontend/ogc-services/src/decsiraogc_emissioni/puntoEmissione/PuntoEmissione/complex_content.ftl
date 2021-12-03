<table class="featureInfo">
  <caption class="featureInfo">Punti di emissione in atmosfera</caption>
  <#list features as feature>
    <tr>
      <th>Sigla</th>
	  <th>Tipo emissione</th>
	  <th>Stato autorizzazione</th>
	  <th>Portata aeriforme</th>
	  <th>Temperatura emissione</th>
	  <th>Temperatura ambiente</th>
	  <th>Altezza geometrica emissione</th>
	  <th>Diametro o primo lato camino (m)</th>
	  <th>Secondo lato camino (m)</th>
    </tr>
    <tr>
      <td>${feature.sigla.value}</td>
	  <td>${feature.desTipoEmissione.value}</td>
	  <td>${feature.desStato.value}</td>
	  <td>${feature.portataAeriforme_Nm3_h.value}</td>
	  <td>${feature.temperaturaEmissione.value}</td>
	  <td>${feature.temperaturaAmbiente.value}</td>
	  <td>${feature.altezza_m.value}</td>
	  <td>${feature.diametroPrimoLato.value}</td>
	  <td>${feature.secondoLato.value}</td>
    </tr>
  </#list>
</table>