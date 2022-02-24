<table class="featureInfo">
  <caption class="featureInfo">BDN - Mappa semaforica Specie Flora su Griglia 1 Km</caption>
  <#list features as feature>
    <tr>
      <th>Numero specie totali</th>
	  <th>Numero osservazioni totali</th>
	  <th>Numero osservazioni specie non protette</th>
	  <th>Numero osservazioni specie meritevoli di attenzione</th>
	  <th>Numero osservazioni specie protette legalmente</th>
	  <th>Anno osservazione pi&ugrave; antica</th>
	  <th>Anno osservazione pi&ugrave; recente</th>
	  <th>Classe di protezione</th>
    </tr>
    <tr>
      <td>${feature.num_specie_totali.value}</td>
	  <td>${feature.num_osservazioni_totali.value}</td>
	  <td>${feature.num_oss_specie_non_protette.value}</td>
	  <td>${feature.num_oss_specie_meritevoli_attenzione.value}</td>
	  <td>${feature.num_oss_specie_protette_legalmente.value}</td>
	  <td>${feature.anno_oss_antica.value}</td>
	  <td>${feature.anno_oss_recente.value}</td>
	  <td>${feature.classe_protezione.value}</td>
    </tr>
  </#list>
</table>
