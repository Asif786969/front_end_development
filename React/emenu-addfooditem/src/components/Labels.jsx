const Labels = () => {
    return (
        
        <form id="details">
            <label for="food_name">Enter Food Name:</label><input id="food_name" />
            <label for="food_description">Enter Food Description:</label><input id="food_description" />
            <label for="food_price">Enter Food Price(In &#x20b9;):</label><input type="number" id="food_price" />
            <label for="food_tax">Enter Food Tax(In %):</label><input type="number" id="food_tax" />
            <label for="food_availability">Availability:</label><input type="radio" id="true"/>True<input type="radio" id="false"/>False
            <input type="submit" id="add-food-button" value="ADD FOOD"/>

        </form>
      );
}
 
export default Labels;
