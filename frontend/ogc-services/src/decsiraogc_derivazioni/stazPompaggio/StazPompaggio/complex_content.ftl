<table class="featureInfo">
  <caption class="featureInfo">Stazioni di pompaggio</caption>
  <#list features as feature>
    <tr>
	  <th>Codice rilievo</th>
	  <th>Comune di localizzazione</th>
	  <th>Denominazione</th>
	  <th>Tipologia</th>
	  <th>Portata complessiva pompaggio (l/s)</th>
	  <th>Potenza installata (kW)</th>
    </tr>
    <tr>
	  <td>${feature.codiceRilievoStazPomp.value}</td>
	  <td>${feature.desComuneStazPomp.value}</td>
	  <td>${feature.denominazioneStazPomp.value}</td>
	  <td>${feature.desTipoStazPomp.value}</td>
	  <td>${feature.qComplessivaStazPomp.value}</td>
	  <td>${feature.qInstallataStazPomp.value}</td>
    </tr>
  </#list>
</table>