function formatTimeStamp(date) {
    let result = "";
    const oneHour = 1000 * 60 * 60;
    const oneDay = oneHour * 24;
    const oneMonth = oneDay * 31;
    const oneYear = oneMonth * 12;
    const eternity = oneYear + 1;
    const timeDif = new Date() - new Date(date);
    //На случай, если в результате неизвестной ошибки разница в датах окажется отрицательной
    if (timeDif < 0) return result;
  
    if (timeDif < oneHour) {
      const minutes = Math.floor(timeDif / 60000);

      result = `${minutes} мин.`;
      return result;
    }
  
    if (timeDif < oneDay) {
      const hours = Math.floor(timeDif / oneHour);
    
      result = `${hours} ч.`;
      return result;
    }
  
    if (timeDif < oneMonth) {
      const days = Math.floor(timeDif / oneDay);

      result = `${days} дн.`;
      return result;
    }
  
    if (timeDif < oneYear) {
      const months = Math.floor(timeDif / oneMonth);

      result = `${months} мес.`;
      return result;
    }
  
    //Во всех остальных случаях, но для читабельности оставил if
    if (timeDif >= eternity) {
      const years = Math.floor(timeDif / oneYear);

      result = `${years} г.`;
      return result;
    }
  }

  export default formatTimeStamp;