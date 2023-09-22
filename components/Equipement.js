import Icon from "@mdi/react"
import { mdiMicrowave } from "@mdi/js"
import { mdiStove } from "@mdi/js"
import { mdiFridge } from "@mdi/js"
import { mdiDishwasher } from "@mdi/js"
import { mdiToasterOven } from "@mdi/js"
import { mdiSnowflake } from "@mdi/js"
import { mdiCoffeeMaker } from "@mdi/js"
import { mdiCoffee } from "@mdi/js"
import { mdiKettleOutline } from "@mdi/js"
import { mdiToaster } from "@mdi/js"
import { mdiWashingMachine } from "@mdi/js"
import { mdiTumbleDryer } from "@mdi/js"
import { mdiIron } from "@mdi/js"
import { mdiIronBoard } from "@mdi/js"
import { mdiHairDryer } from "@mdi/js"
import { mdiShowerHead } from "@mdi/js"
import { mdiBathtub } from "@mdi/js"
import { mdiWifi } from "@mdi/js"
import { mdiTelevision } from "@mdi/js"
import { mdiSmokeDetectorVariant } from "@mdi/js"
import { mdiBalcony } from "@mdi/js"
import { mdiAirConditioner } from "@mdi/js"
import { mdiFan } from "@mdi/js"
import { mdiHanger } from "@mdi/js"
import { mdiWashingMachineAlert } from "@mdi/js"
import { mdiElevatorPassenger } from "@mdi/js"

export default function Equipement({ data }) {
	return (
		<div className="equipement">
			<div className="cuisine">
				{data.dishwasher ? (
					<div>
						<Icon path={mdiDishwasher} size={1} />

						<p>dishwasher</p>
					</div>
				) : null}
				{data.oven ? (
					<div>
						<Icon path={mdiToasterOven} size={1} />

						<p>oven</p>
					</div>
				) : null}
				{data.microwave ? (
					<div>
						<Icon path={mdiMicrowave} size={1} />

						<p>microwave</p>
					</div>
				) : null}
				{data.stove ? (
					<div>
						<Icon path={mdiStove} size={1} />

						<p>stove</p>
					</div>
				) : null}
				{data.fridge ? (
					<div>
						<Icon path={mdiFridge} size={1} />

						<p>fridge</p>
					</div>
				) : null}
				{data.freezer ? (
					<div>
						<Icon path={mdiSnowflake} size={1} />

						<p>freezer</p>
					</div>
				) : null}
				{data.expressoCoffee ? (
					<div>
						<Icon path={mdiCoffee} size={1} />

						<p>expresso coffee machine</p>
					</div>
				) : null}
				{data.filterCoffee ? (
					<div>
						<Icon path={mdiCoffeeMaker} size={1} />

						<p>filter coffee machine</p>
					</div>
				) : null}
				{data.kettle ? (
					<div>
						<Icon path={mdiKettleOutline} size={1} />

						<p>kettle</p>
					</div>
				) : null}
				{data.toaster ? (
					<div>
						<Icon path={mdiToaster} size={1} />

						<p>toaster</p>
					</div>
				) : null}
			</div>
			<div className="sdb">
				{data.washingMachine ? (
					<div>
						<Icon path={mdiWashingMachine} size={1} />

						<p>washing machine</p>
					</div>
				) : null}
				{data.clothesDryer ? (
					<div>
						<Icon path={mdiTumbleDryer} size={1} />
						<p>clothes dryer</p>
					</div>
				) : null}
				{data.washerDryer ? (
					<div>
						<Icon path={mdiWashingMachineAlert} size={1} />

						<p>washer dryer</p>
					</div>
				) : null}
				{data.dryingRack ? (
					<div>
						<Icon path={mdiHanger} size={1} />
						<p>drying rack</p>
					</div>
				) : null}
				{data.iron ? (
					<div>
						<Icon path={mdiIron} size={1} />
						<p>iron</p>
					</div>
				) : null}
				{data.ironBoard ? (
					<div>
						<Icon path={mdiIronBoard} size={1} />
						<p>iron board</p>
					</div>
				) : null}
				{data.hairDryer ? (
					<div>
						<Icon path={mdiHairDryer} size={1} />
						<p>hair dryer</p>
					</div>
				) : null}
				{data.shower ? (
					<div>
						<Icon path={mdiShowerHead} size={1} />
						<p>shower</p>
					</div>
				) : null}
				{data.bath ? (
					<div>
						<Icon path={mdiBathtub} size={1} />
						<p>bath</p>
					</div>
				) : null}
				{data.soap ? (
					<div>
						<i className="fa-solid fa-soap"></i>
						<p>soap</p>
					</div>
				) : null}
			</div>
			<div className="autre">
				{data.wifi ? (
					<div>
						<Icon path={mdiWifi} size={1} />

						<p>wifi</p>
					</div>
				) : null}
				{data.tv ? (
					<div>
						<Icon path={mdiTelevision} size={1} />
						<p>tv</p>
					</div>
				) : null}

				{data.smokeDetector ? (
					<div>
						<Icon path={mdiSmokeDetectorVariant} size={1} />
						<p>smoke detector</p>
					</div>
				) : null}
				{data.linenAndTowels ? (
					<div>
						<i className="fa-solid fa-house"></i>
						<p>linen and towels</p>
					</div>
				) : null}
				{data.balcony ? (
					<div>
						<Icon path={mdiBalcony} size={1} />
						<p>balcony</p>
					</div>
				) : null}
				{data.terrace ? (
					<div>
						<Icon path={mdiBalcony} size={1} />
						<p>terrace</p>
					</div>
				) : null}
				{data.ac ? (
					<div>
						<Icon path={mdiAirConditioner} size={1} />
						<p>AC</p>
					</div>
				) : null}
				{data.fan ? (
					<div>
						<Icon path={mdiFan} size={1} />
						<p>fan</p>
					</div>
				) : null}
				{data.elevator ? (
					<div>
						<Icon path={mdiElevatorPassenger} size={1} />
						<p>elevator</p>
					</div>
				) : null}
			</div>
		</div>
	)
}
