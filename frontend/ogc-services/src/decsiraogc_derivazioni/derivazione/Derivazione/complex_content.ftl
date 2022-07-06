<table class="featureInfo">
  <caption class="featureInfo">Derivazione</caption>
  <#list features as feature>
    <tr>
	  <th>Codice rilievo derivazione</th>
	  <th>Specie della derivazione</th>
	  <th>Portata massima derivabile (l/s)</th>
	  <th>Portata media derivabile (l/s)</th>
	  <th>Usi della risorsa</th>
    </tr>
    <tr>
	  <td>${feature.codiceRilievoDeriv.value}</td>
	  <td>${feature.desTipoDeriv.value}</td>
	  <td>${feature.portataMaxDeriv.value}</td>
	  <td>${feature.portataMedDeriv.value}</td>
	  <td>${feature.elencoUsiLegge.value}</td>
    </tr>
  </#list>
</table>