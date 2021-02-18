<template>
    <section id="content"><div class="ic">More Website Templates @ TemplateMonster.com - July 28, 2014!</div>
        <div class="container">
            <div class="row">
                <div class="grid_12">
                    <h3>Контакти</h3>
                    <div class="map">
                        <!--<figure class="">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24214.807650104907!2d-73.94846048422478!3d40.65521573400813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1395650655094" style="border:0"></iframe>
                        </figure>-->
                    </div>
                </div>
                <div class="grid_5">
                    <h3 class="head__1">Адрес:</h3>
                    <address class="text3">
                        гр. София <br>ул. Д-р Людвик Заменхоф <br>партер
                    </address><br>
                    <address class="text3">
                        гр. Самоков <br>ул. Житна чаршия №39 <br>
                    </address>
                </div>
                <div class="grid_4">
                    <h3 class="head__1">Телефон:</h3>
                    <div class="text3">
                        0700 17 727 <br>02 850 54 63
                    </div><br><br>
                    <div class="text3">
                    0722 60 990 <br>02 850 54 63
                    </div>
                </div>
                <div class="grid_3">
                    <h3 class="head__1">Имейл:</h3>
                    <div class="text3">
                        <a href="#">office@silven7.com</a>
                    </div><br><br><br>
                    <div class="text3">
                        <a href="#">office-samokov@silven7.com</a>
                    </div>
                </div>
                <div class="grid_12">
                    <h3 class="head__1">Контактна форма</h3>
                    <!--<div class="fwn">
                        <p>24/7 support is available for all <a href="http://www.templatemonster.com/" rel="nofollow" class="color1">premium themes</a>.</p>
                        <p>If you have problems with customization of freebies, ask guys from <a href="http://www.templatetuning.com/" rel="nofollow" class="color1">TemplateTuning</a> to help you.</p>
                        Aliquam nibh ante, egestas id dictum a, commodo luctus liberoret. Praesenter faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequa.
                    </div>-->
                    <form id="contact-form">
                        <div class="contact-form-loader"></div>
                        <fieldset>
                            <label class="name">
                                <input type="text" name="name" placeholder="Име:" value=""
                                       data-constraints="@Required @JustLetters"  />
                                <span class="empty-message">*This field is required.</span>
                                <span class="error-message">*This is not a valid name.</span>
                            </label>

                            <label class="email">
                                <input type="text" name="email" placeholder="Имейл:" value=""
                                       data-constraints="@Required @Email" />
                                <span class="empty-message">*This field is required.</span>
                                <span class="error-message">*This is not a valid email.</span>
                            </label>
                            <label class="phone">
                                <input type="text" name="phone" placeholder="Телефон:" value=""
                                       data-constraints="@Required @JustNumbers" />
                                <span class="empty-message">*This field is required.</span>
                                <span class="error-message">*This is not a valid phone.</span>
                            </label>

                            <label class="message">
                                <textarea name="message" placeholder="Съобщение:"
                                          data-constraints='@Required @Length(min=20,max=999999)'></textarea>
                                <span class="empty-message">*This field is required.</span>
                                <span class="error-message">*The message is too short.</span>
                            </label>
                            <div class="clear"></div>
                            <div>
                                <a href="#" class="btn" data-type="submit">Send e-mail</a>
                            </div>
                        </fieldset>
                        <div class="modal fade response-message">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 class="modal-title">Modal title</h4>
                                    </div>
                                    <div class="modal-body">
                                        You message has been sent! We will be in touch soon.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>

</style>